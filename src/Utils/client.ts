import axios from "axios";
import {api} from "../Config/config";


export default axios.create({
    baseURL: `${api.protocol}://${api.host}:${api.port}/`,
    headers: {
        'Content-Type': 'application/json',
    }
})