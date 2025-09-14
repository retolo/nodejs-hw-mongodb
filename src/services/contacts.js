import { ContactCollection } from "../db/models/contact.js";



export async function getAllContacts(){
    const res = await ContactCollection.find();
    return res;
}

export async function getContactById(contactId){
    const res = await ContactCollection.findById(contactId);
    return res;
}
