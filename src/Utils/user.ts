import {TUser} from "../Types/user";
import client from "./client";
import {DataEntitiesTypes} from "../Enums/api.enums";
import {api} from "../Config/config";



export const login = async (nickname: string, password:string): Promise<TUser> => {

    let apiUrl: string = `${api.protocol}://${api.host}:${api.port}/`;
    console.log('entered to login')
    const {data} = await client.put(`${apiUrl}${DataEntitiesTypes.LoginUser}`, {nickname, password})
    return data;
};