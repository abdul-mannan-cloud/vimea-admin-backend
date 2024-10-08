const mongoose = require("mongoose");

const Appointment = require('../Models/Appointment')
const nodeMailer = require("nodemailer");
const User = require("../Models/User");
const Children = require("../Models/Children");
const addAppointment = async (req, res) => {
    const appointment = req.body
    const newAppointment = new Appointment(appointment)
    if(appointment.showHistory){
        const user = await User.findOne({email: appointment.parent.email})
        if(user) {
            user.appointments.push({
                appointmentId: newAppointment._id,
                date: newAppointment.date,
                time: newAppointment.time,
                duration: newAppointment.duration,
                service: newAppointment.service,
                category: newAppointment.category,
                serviceType: newAppointment.serviceType,
                parent:{
                    firstName: newAppointment.parent.firstName,
                    lastName: newAppointment.parent.lastName,
                    contactNumber: newAppointment.parent.contactNumber,
                    email: newAppointment.parent.email,
                },
                child: {
                    firstName: newAppointment.child.firstName,
                    lastName: newAppointment.child.lastName,
                    dateOfBirth: newAppointment.child.birthDate,
                    id: newAppointment.child.id
                }
            })
            await user.save()
        }
        const child = await Children.findById(newAppointment.child.id)
        if(child) {
            child.appointments = [...child.appointments, newAppointment._id]
            await child.save()
        }
    }
    try {
        await newAppointment.save()

        const emailData =  `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Konfirmimi i Terminit</title>
    <style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container {
        width: 80%;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1, h2 {
        color: #333;
    }
     .titulli {
        color: #0D7490;
        text-align:start;
    }
  

    .details {
        margin-top: 20px;
        text-align: left;
        color:black;
    }

    .detail-item {
        margin-bottom: 10px;
        color:black;
    }

    .products {
        margin-top: 20px;
        text-align: left;
    }

    .product-item {
        margin-bottom: 5px;
    }

    .foto {
        text-align:start;
        display:flex;
        padding:10px;
    }
    .parent {
        text-align:start;
     
       
    }
        
    </style>
</head>
<body>
    <div class="container">
    <img class="foto" src="cid:logo" alt="Logo" width="80px" height="auto">
        <h1 class="titulli>Konfirmimi i Terminit</h1>
        <div class="parent">
       <h2 class="parent"> Përshëndetje i/e nderuar ju keni caktuar terminin me sukses. </h2>
            <h2 class="parent">Detajet e Terminit</h2>
            <ul class="parent" >
                <li>Id-ja: ${newAppointment._id}</li>
                <li>Shërbimi: ${newAppointment.service}</li>
                <li>Data e terimint: ${newAppointment.date}</li>
                <li>Koha e terimint: ${newAppointment.time}</li>
                
            </ul>
        </div>
        <div class="parent">
            <h2>Prindi</h2>
            <ul class="parent">
                <li>Emri: ${newAppointment.parent.firstName}</li>
                <li>Mbiemri: ${newAppointment.parent.lastName}</li>
                <li>E-mail: ${newAppointment.parent.email}</li>
            </ul>
        </div>
        <div class="parent">
            <h2>Fëmiju</h2>
            <ul class="parent">
                <li>Emri: ${newAppointment.child.firstname}</li>
                <li>Mbiemri: ${newAppointment.child.lastName}</li>
                <li>Data e lindjes: ${newAppointment.child.birthDate}</li>
            </ul>
        </div>
        <div>        <h3>Faleminderit për mirkuptimin tuaj! </h3></div>
                  
        </div>
    </div>
</body>
</html>
            `

        let transporter;
        try {
            transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.PUBLIC_EMAIL,
                    pass: process.env.PUBLIC_EMAIL_PASSWORD
                }
            });
        }catch (e) {
            console.log(e)
            res.status(500).json({error: e});
        }

        const mailOptions = {
            from: process.env.PUBLIC_EMAIL,
            to: appointment.parent.email,
            subject: 'Appointment Confirmation',
            html:emailData,
            attachments: [{
                filename: 'vimea-logo.png',
                path: 'public/vimea-logo.png',
                cid: 'logo' //same cid value as in the html img src
            }]
        };

        const mailOptionsAdmin = {
            from: process.env.PUBLIC_EMAIL,
            to: process.env.PUBLIC_EMAIL,
            subject: 'Appointment Confirmation',
            html: emailData,
            attachments: [{
                filename: 'vimea-logo.png',
                path: 'public/vimea-logo.png',
                cid: 'logo' //same cid value as in the html img src
            }]
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(500).json({error: error});
            }else {
                console.log('Email sent: ' + info.response);
            }
        });

        transporter.sendMail(mailOptionsAdmin, function(error, info){
            if (error) {
                console.log(error);
                res.status(500).json({error: error});
            }else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json(newAppointment)
    } catch (error) {
        console.log(error)
        res.status(409).json({message: error.message})
    }
}

const deleteAppointment = async (req, res) => {
    const {id} = req.params
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Appointment with that id')
    const appointment = await Appointment.findById(id)
    const user = await User.findOne({email: appointment.parent.email})
    if(user) {
        const app = user.appointments.find(app => app.appointmentId === id)
        const child = await Children.findById(app.child.id)
        if(child) {
            child.appointments = child.appointments.filter(app => app.appointmentId !== id)
            await child.save()
        }
        user.appointments = user.appointments.filter(app => app.appointmentId !== id)
        await user.save()
    }
    await Appointment.findByIdAndRemove(id)
    res.json({message: 'Appointment deleted successfully'})
}

const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({})
    res.status(200).json(appointments)
}

const updateAppointment = async (req, res) => {
    const {id} = req.params
    const appointment = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Appointment with that id')
    await Appointment.findByIdAndUpdate(id, appointment, {new: true})
    res.json({message: 'Appointment updated successfully'})
}

const getTodayAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({createdAt: {$gte: new Date().setHours(0, 0, 0, 0)}})
        res.status(200).json(appointments)
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {addAppointment, deleteAppointment, getAppointments, updateAppointment,getTodayAppointments}
