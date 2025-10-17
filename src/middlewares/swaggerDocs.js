/* eslint-disable no-unused-vars */
import fs from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';
import createHttpError from 'http-errors';
import swaggerUI  from 'swagger-ui-express'



export const swaggerDocs =  () =>{
    try {
        const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
        return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)]
    } catch (error) {
        return (req, res, next) =>{
            next(createHttpError(500, "Can't load swagger docs"))
        }

    }
}
