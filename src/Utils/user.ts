// import axios from "axios";
import {TUser} from "../Types/user";



// export const login = async (nickname: string): Promise<TUser> => {
export const login = async (): Promise<TUser> => {

    // const { data } = await axios.put("/api/users", { nickname });
    const data = {
        id: 123,
        nickname: "TEST USER"
    }

    return data;
};
