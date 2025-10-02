import Joi from "joi";


export const schemaCreate = Joi.object({
    name: Joi.string().min(3).max(20 ).required(),
    phoneNumber: Joi.string().min(10).max(20 ).required(),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal').required(),

})


export const schemaUpdate = Joi.object({
    name: Joi.string().min(3).max(20 ).required(),
    phoneNumber: Joi.string().min(10).max(20 ).required(),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal').required(),

})
