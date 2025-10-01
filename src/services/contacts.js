import { ContactCollection } from "../db/models/contact.js";
import { SORT_ORDER } from "../constants/index.js";


export async function getAllContacts(page=1, perPage=10, sortBy='_id', sortOrder=SORT_ORDER.ASC){
    const limit = perPage;
    const skip = page > 0 ? (page - 1) * perPage : 0

    const [contacts, totalItems] = await Promise.all([
        await ContactCollection.find().sort({[sortBy]: sortOrder}).limit(limit).skip(skip).exec(),
        ContactCollection.countDocuments()
    ])

    const totalPages = Math.ceil(totalItems / perPage)

    return{
        data: contacts,
        page: page,
        perPage: perPage,
        totalItems: totalItems,
        totalPages: totalPages,
        hasNextPage: totalPages > 1,
        hasPreviousPage: page > 1


    }



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
