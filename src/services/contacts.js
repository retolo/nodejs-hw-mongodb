import { ContactCollection } from "../db/models/contact.js";



export async function getAllContacts(){
    const res = await ContactCollection.find();
    return res;
}

export async function getContactById(contactId){
    const res = await ContactCollection.findById(contactId);
    return res;
}

export async function createContact(payload) {
    const res = await ContactCollection.create(payload);
    return res;

}


export async function deleContact(contactId) {
    const res = ContactCollection.findByIdAndDelete(contactId)
    return res

}

export async function upserContact(payload, contactId){
    const res = await ContactCollection.findByIdAndUpdate(payload, contactId, {
        new: true,
        includeResultMetadata: true
    });
    return {
        value: res.value,
        updatedExisting: res.lastErrorObject.updatedExisting
    };
}
