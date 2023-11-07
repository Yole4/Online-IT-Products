import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/Services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // loading
    const [errorResponse, setErrorResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const [registerInfo, setRegisterInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const user = localStorage.getItem('token');
        setUser(JSON.parse(user));
    }, []);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    // -------------------------------------    REGISTER    ---------------------------------------------
    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const registerUser = useCallback( async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));
        
        setIsLoading(false);
        setIsOpenRegister(false);

        if (response.error){
            return setErrorResponse(response);
        }else{
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response);
        }
    }, [registerInfo]);

    // -------------------------------------   LOGOUT  --------------------------------------------
    const [isLogout, setIsLogout] = useState(false);

    const logoutUser = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
        setIsLogout(false);
    }, []);

    // ------------------------------------    LOGIN USERS -----------------------------------------
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));

        setIsLoading(false);
        setIsOpenLogin(false);

        if (response.error){
            return setErrorResponse(response);
        }else{
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response);
        }
    }, [loginInfo]);

    // ------------------------------------ PROTECTED   -------------------------------------------
    const [userCredentials, setUserCredentials] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token){
            setIsLoading(true);

            const fetchUser = async () => {
                const response = await getRequest(`${baseUrl}/users/protected`);

                

                if (response.error){
                    return setErrorResponse(response);
                }else{
                    setUserCredentials(response);
                    setIsLoading(false);
                    console.log(response);
                }
            };
            fetchUser();
        }else{
            setUser(null);
        }
    },[token]);

    return <AuthContext.Provider value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        errorResponse,
        isLoading,
        logoutUser,
        loginInfo,
        updateLoginInfo,
        handleLogin,
        isOpenLogin,
        setIsOpenLogin,
        isLogout,
        setIsLogout,
        isOpenRegister,
        setIsOpenRegister
    }}>
        {children}
    </AuthContext.Provider>
}