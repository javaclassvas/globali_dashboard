import React, {createContext} from "react";
import * as userApi from "../../Utils/user";
import {useStateWithLocalStorage} from "../../Hooks/hooks";
import {TUser} from "../../Types/user";

type TDashBoardContext = {
    user?: TUser;
    login: (nickname: string, password: string) => Promise<boolean>;
    logout: () => void;
};

export const DashBoardContext = createContext<TDashBoardContext>({} as TDashBoardContext);

export const DashBoardContextProvider: React.FC = ({
                                                  children
                                              }): React.ReactElement => {
    const [user, setUser] = useStateWithLocalStorage<TUser | undefined>(
        "chatUser"
    );

    const login = async (nickname: string, password: string): Promise<boolean> =>{
        const loggedUser = await userApi.login(nickname, password);
        if(loggedUser){
            setUser(loggedUser)
            return true;
        }
        return false;
    }


    const logout = () => setUser(undefined);


    const value: TDashBoardContext = {
        user,
        login,
        logout
    };
    return <DashBoardContext.Provider value={value}>{children}</DashBoardContext.Provider>;
};
