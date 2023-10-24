import {fileURLToPath} from 'url';
import { dirname } from 'path';
// import bcrypt from 'bcrypt';
import fs from "fs";
import Handlebars from 'handlebars';
import config from './config/config.js';

// export const createHash = async(password)=>{
//     const salts = await bcrypt.genSalt(10);
//     return bcrypt.hash(password,salts);
// }

// export const validatePassword = (password,hashedPassword)=> bcrypt.compare(password,hashedPassword);

// export const cookieExtractor = (req) =>{
//     let token = null;
//     if(req&&req.cookies) {
//         token = req.cookies[config.jwt.COOKIE]
//     }
//     return token;
// }

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// export const generateMailTemplate = async(template,payload) =>{
//     const content = await fs.promises.readFile(`${__dirname}/templates/${template}.handlebars`,'utf-8');
//     const precompiledContent = Handlebars.compile(content);
//     const compiledContent = precompiledContent({...payload});
//     return compiledContent;
// }

export default __dirname;