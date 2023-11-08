import { createContext, useCallback, useEffect, useState } from "react";
import { agetRequest, apostRequest, baseUrl, getRequest, postRequest } from "../utils/Services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // loading
    const [errorResponse, setErrorResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mount, setMount] = useState(false);

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

    const registerUser = useCallback(async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const firstName = registerInfo.firstName;
        const middleName = registerInfo.middleName;
        const lastName = registerInfo.lastName;
        const username = registerInfo.username;
        const password = registerInfo.password;
        const confirmPassword = registerInfo.confirmPassword;
        const data = { firstName, middleName, lastName, username, password, confirmPassword };

        const response = await postRequest(`${baseUrl}/users/register`, data);

        setIsLoading(false);
        setIsOpenRegister(false);
        setMount(mount ? false : true);

        if (response.error) {
            return setErrorResponse(response);
        } else {
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response.token);
        }
    }, [registerInfo]);

    // -------------------------------------   LOGOUT  --------------------------------------------
    const [isLogout, setIsLogout] = useState(false);

    const logoutUser = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
        setUserCredentials(null);
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

        const username = loginInfo.username;
        const password = loginInfo.password;
        const data = { username, password };

        const response = await postRequest(`${baseUrl}/users/login`, data);

        setIsLoading(false);
        setIsOpenLogin(false);
        setMount(mount ? false : true);

        if (response.error) {
            return setErrorResponse(response);
        } else {
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response.token);
        }
    }, [loginInfo]);

    // ------------------------------------ PROTECTED   -------------------------------------------
    const token = user;
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (token) {
            setIsLoading(true);

            const fetchUser = async () => {
                const response = await agetRequest(`${baseUrl}/users/protected`);

                setIsLoading(false);

                if (response.error) {
                    setUser(null);
                    return setErrorResponse(response);
                } else {
                    setUserId(response.user);
                }
            };
            fetchUser();
        }
    }, [token, mount, user]);

    // -------------------------------------    FETCH USER CREDENTIALS --------------------------------------
    const [userCredentials, setUserCredentials] = useState([]);

    useEffect(() => {
        if (userId?.id) {
            const fetchUserData = async () => {
                setIsLoading(true);

                const id = userId.id;
                try {
                    const response = await apostRequest(`${baseUrl}/users/fetch-user-credentials`, { id });

                    setIsLoading(false);

                    if (response.error) {
                        return setErrorResponse(response);
                        // console.log(response);
                    } else {
                        setUserCredentials(response.message[0]);
                    }
                } catch (error) {
                    setIsLoading(false);
                    console.log('error: ', error);
                }
            };
            fetchUserData();
        }
    }, [userId, mount]);

    // ----------------------------------------------   AUTO PROFILE UPLOAD --------------------------------------------
    const [autoImage, setAutoImage] = useState([]);

    const updateProfile = useCallback((info) => {
        setAutoImage(info);
    }, []);

    useEffect(() => {
        if (autoImage) {
            if (autoImage.length === 0) {
                // console.log('nothing change!')
            }
            else {
                setIsLoading(true);
                const autoUpload = async () => {

                    const requestImageToUpload = new FormData();
                    requestImageToUpload.append('image', autoImage);
                    requestImageToUpload.append('userId', userId.id);

                    try {
                        const response = await apostRequest(`${baseUrl}/users/profile-upload`, requestImageToUpload);
                        setIsLoading(false);

                        if (response.error) {
                            return setErrorResponse(response);
                            // console.log(response);
                        } else {
                            setErrorResponse(response.message);
                            setMount(mount ? false : true);
                        }
                    } catch (error) {
                        setIsLoading(false);
                        console.log('error: ', error);
                    }
                };
                autoUpload();
            }
        }
    }, [autoImage]);

    // ==================================   ADD CATEGORY    ===========================================
    const [categoryName, setCategoryName] = useState('');

    const updateCategoryName = useCallback((info) => {
        setCategoryName(info);
    }, []);

    const handleAddCategory = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/add-category`, {categoryName});

            if (response.error){
                return setErrorResponse(response);
            }else{
                setErrorResponse(response.message);
            }
        } catch (error) {
            
        }
    }

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
        setIsOpenRegister,
        userCredentials,
        updateProfile,
        categoryName,
        updateCategoryName,
        handleAddCategory
    }}>
        {children}
    </AuthContext.Provider>
}