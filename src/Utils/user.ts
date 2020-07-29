import {TUser} from "../Types/user";
import client from "./client";
import {DataEntitiesTypes} from "../Enums/api.enums";
import {api} from "../Config/config";



export const login = async (nickname: string, password:string): Promise<TUser> => {

    // let apiUrl: string = `${api.protocol}://${api.host}:${api.port}/`;


    let apiUrl: string = `${api.protocol}://${api.host}/`;
    const {data} = await client.put(`${apiUrl}${DataEntitiesTypes.LoginUser}`, {nickname, password})
    console.log('=====>>>', data)
    return data;
};