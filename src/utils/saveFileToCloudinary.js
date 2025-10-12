import cloudinary from 'cloudinary'
import { getEnvVar } from './getEnvVar.js'
import fs from 'node:fs/promises'
import { CLOUDINARY } from '../constants/index.js'
cloudinary.v2.config({
    secure: true,
    api_key: getEnvVar(CLOUDINARY.API_KEY),
    api_secret: getEnvVar(CLOUDINARY.API_SECRET),
    cloud_name: getEnvVar(CLOUDINARY.CLOUD_NAME)
})



export const saveFileToCloudinary = async (file) =>{
    const response = await cloudinary.v2.uploader.upload(file.path);
    await fs.unlink(file.path);
    return response.secure_url;
}
