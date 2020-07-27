import React, {createContext} from "react";
import * as userApi from "../../Utils/user";
import {useStateWithLocalStorage} from "../../Hooks/hooks";
import {TUser} from "../../Types/user";

type TDashBoardContext = {
    user?: TUser;
    login: (nickname: string) => Promise<void>;
    logout: () => void;
};

export const DashBoardContext = createContext<TDashBoardContext>({} as TDashBoardContext);

export const NEW_MESSAGE_EVENT = "new-message";

export const DashBoardContextProvider: React.FC = ({
                                                  children
                                              }): React.ReactElement => {
    const [user, setUser] = useStateWithLocalStorage<TUser | undefined>(
        "chatUser"
    );

    // const login = async (nickname: string): Promise<void> =>
    //     setUser(await userApi.login(nickname));

    const login = async (): Promise<void> =>
        setUser(await userApi.login());


    const logout = () => setUser(undefined);


    const value: TDashBoardContext = {
        user,
        login,
        logout
    };
    return <DashBoardContext.Provider value={value}>{children}</DashBoardContext.Provider>;
};
