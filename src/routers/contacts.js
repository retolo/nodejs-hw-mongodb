import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import isValidId from "../middlewares/isValidId.js";
import {allContactsController, contactByIdController, createContactController, deleContactController, upsertContactController} from '../controllers/contacts.js'
import { schemaCreate, schemaUpdate } from "../validation/contacts.js";
const router = Router();


router.get('/contacts', ctrlWrapper(allContactsController));
router.get('/contacts/:contactId',  isValidId, ctrlWrapper(contactByIdController));
router.post('/contacts', validateBody(schemaCreate), ctrlWrapper(createContactController));
router.delete('/contacts/:contactId', isValidId,  ctrlWrapper(deleContactController))
router.patch('/contacts/:contactId', isValidId,  validateBody(schemaUpdate), ctrlWrapper(upsertContactController))
export default router;
