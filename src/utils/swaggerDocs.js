/* eslint-disable no-unused-vars */
import fs from 'node:fs/promises';
import { SWAGGER_PATH } from '../constants';
import createHttpError from 'http-errors';
import swaggerUI  from 'swagger-ui-express'



export const swaggerDocs = async () =>{
    try {
        const swaggerDoc = JSON.parse(await fs.readFileSync(SWAGGER_PATH).toString());
        return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)]
    } catch (error) {
        return (req, res, next) =>{
            next(createHttpError(500, "Can't load swagger docs"))
        }

    }
}
