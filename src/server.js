import express from 'express';
import cors from 'cors'
import pino from 'pino-http'
import * as dotenv from 'dotenv'
import { getAllContacts, getContactById} from './services/contacts.js';
dotenv.config();
const PORT = process.env.PORT;
function setupServer(){
    const app = express();


    app.use(express.json());
    app.use(cors());

    app.use(
        pino({
            transport:{
                target: 'pino-pretty'
            }
        })
    )
    app.get('/contacts', async (req, res) =>{
        const contacts = await getAllContacts();
        res.status(200).json({
            status: 200,
            message:"Successfully found contacts!",
            data: contacts,
        })
    })
    app.get('/contacts/:contactId', async (req, res) =>{
        try {
            const {contactId} = req.params;
            const contact = await getContactById(contactId);
            res.status(200).json({
                status: 200,
                message:`Successfully found contact with id ${contactId}!`,
                data: {
                    name: contact.name,
                    phoneNumber: contact.phoneNumber,
                    isFavourite: contact.isFavourite,
                    contactType: contact.contactType,
                    email: contact.email,

                },
        })
        } catch (error) {
            res.status(404).json({
                message: 'Contact not found',
            })
            throw error;
        }

    })

    app.use((req, res) =>{
        res.status(404).json({
            message: 'Not found'
        })
    })

    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`)
    })
}



export default setupServer;
