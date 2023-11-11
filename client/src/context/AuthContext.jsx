import { createContext, useCallback, useEffect, useState } from "react";
import { agetRequest, apostRequest, baseUrl, getRequest, postRequest } from "../utils/Services";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

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
            setErrorResponse({ message: response.message, isError: true });
        } else {
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response.token);
            setErrorResponse({ message: response.message, isError: false });
        }
    }, [registerInfo]);

    // -------------------------------------   LOGOUT  --------------------------------------------
    const [isLogout, setIsLogout] = useState(false);

    const logoutUser = useCallback(() => {
        localStorage.removeItem('token');
        setUser(null);
        setUserCredentials(null);
        setIsLogout(false);
        setErrorResponse({ message: "Logout Success", isError: false });
        navigate('/');
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
            setErrorResponse({ message: response.message, isError: true });
        } else {
            localStorage.setItem("token", JSON.stringify(response.token));
            setUser(response.token);
            setErrorResponse({ message: response.message, isError: false });
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
                    setErrorResponse({ message: response.message, isError: true });
                } else {
                    setUserId(response.user);
                }
            };
            fetchUser();
        }
    }, [token, mount, user]);

    // ---------------------------------    CHANGE PASSWORD ----------------------------------------------
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [changePasswordData, setChangePasswordData] = useState({
        username: '',
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChangePassword = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/change-password`, { changePasswordData, userId: userId.id });

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setMount(mount ? false : true);
                setIsChangePassword(false);
                setErrorResponse({ message: response.message, isError: false });
                setChangePasswordData({
                    username: '',
                    password: '',
                    newPassword: '',
                    confirmPassword: ''
                });
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
        }
    };

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
                        console.log(response.message);
                    } else {
                        setChangePasswordData((prev) => ({ ...prev, username: response.message[0].username }));
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

    //-----------------------------------------------   ADD NEW ADDRESS ------------------------------------------------
    const [addressMount, setAddressMount] = useState(false);
    const [isAddAddress, setIsAddAddress] = useState(false);
    const [addressData, setAddressData] = useState({
        street: '',
        barangay: '',
        municipality: '',
        province: '',
        zipCode: '',
        country: '',
        landMark: ''
    });

    const handleAddAddress = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/add-address`, { addressData, userId: userId.id });

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setIsAddAddress(false);
                setAddressMount(addressMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
                setAddressData({
                    street: '',
                    barangay: '',
                    municipality: '',
                    province: '',
                    zipCode: '',
                    country: '',
                    landMark: ''
                });
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
        }
    };

    //-----------------------------------------------   FETCH ADDRESS   ------------------------------------------------
    const [myAddressList, setMyAddressList] = useState(null);
    const [isMyAddress, setIsMyAddress] = useState(false);

    useEffect(() => {
        if (userId) {
            setIsLoading(true);
            setErrorResponse(null);

            const fetchAddress = async () => {
                try {
                    const response = await apostRequest(`${baseUrl}/users/fetch-address`, { userId: userId.id })

                    setIsLoading(false);

                    if (response.error) {
                        console.log(response.message);
                    } else {
                        setIsMyAddress(false);
                        setMyAddressList(response.message);
                    }
                } catch (error) {

                }
            };
            fetchAddress();
        }
    }, [userId, addressMount]);

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
                            setErrorResponse({ message: response.message, isError: true });
                            // console.log(response);
                        } else {
                            setErrorResponse({ message: response.message, isError: false });
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

    // ---------------------------------    HANDLE ADD TO CART  -------------------------------------------
    const [addCartMount, setAddCartMount] = useState(false);
    const [isProductClick, setIsProductClick] = useState(false);

    const handleAddToCart = useCallback(async (productId, quantity) => {

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/add-cart`, { productId, quantity });

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setIsProductClick(false);
                setAddCartMount(addCartMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
        }
    }, []);

    // -----------------------------------------    PLACE ORDER -----------------------------------------
    const [placeOrderMount, setPlaceOrderMount] = useState(false);
    const [isMyOrder, setIsMyOrder] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isPlaceOrder, setIsPlaceOrder] = useState(false);
    const [placeOrderData, setPlaceOrderData] = useState({
        productIds: null,
        quantity: null,
        eachAmount: null,
        totalAmount: null,
        productInfo: null,
        address: null,
        paymentType: null,
        allData: null
    });

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/place-order`, { placeOrderData, userId: userId.id, fullname: `${userCredentials.first_name} ${userCredentials.middle_name} ${userCredentials.last_name}` });

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setIsPlaceOrder(false);
                setIsCart(false);
                setIsMyOrder(true);
                setPlaceOrderMount(placeOrderMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
        }
    }

    // ---------------------------------------- FETCH ORDERS    --------------------------------------------
    const [myOrdersList, setMyOrdersList] = useState(null);

    useEffect(() => {
        if (userId) {
            const fetchOrders = async () => {

                setIsLoading(true);
                setErrorResponse(null);

                try {
                    const response = await apostRequest(`${baseUrl}/users/fetch-myOrders`, { userId: userId.id });

                    setIsLoading(false);

                    if (response.error) {
                        setErrorResponse({ message: response.message, isError: true });
                    } else {
                        setMyOrdersList(response.message);
                    }
                } catch (error) {
                    setIsLoading(false);
                    console.log("Error: ", error);
                }
            };
            fetchOrders();
        }
    }, [userId, placeOrderMount]);

    // -----------------------------------------    DELETE FROM THE CART    --------------------------------

    const handleDeleteCart = async (item) => {

        setIsLoading(true);
        setErrorResponse(null);

        try {
            const response = await apostRequest(`${baseUrl}/users/delete-cart`, { item });

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setAddCartMount(addCartMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error: ", error);
        }
    }

    // ---------------------------------------  FETCH CART ----------------------------------
    const [cartList, setCartList] = useState(null);

    useEffect(() => {
        if (userId) {
            setIsLoading(true);
            setErrorResponse(null);

            const fetchCart = async () => {
                try {
                    const response = await agetRequest(`${baseUrl}/users/fetch-cart`);

                    setIsLoading(false);

                    if (response.error) {
                        setErrorResponse({ message: response.message, isError: true });
                    } else {
                        setCartList(response.message);
                    }
                } catch (error) {
                    setIsLoading(false);
                    console.log("Error: ", error);
                }
            };
            fetchCart();
        }
    }, [userId, addCartMount]);

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
        userId,
        handleAddToCart,
        isProductClick,
        setIsProductClick,
        cartList,
        isChangePassword,
        setIsChangePassword,
        changePasswordData,
        setChangePasswordData,
        handleChangePassword,
        isAddAddress,
        setIsAddAddress,
        addressData,
        setAddressData,
        handleAddAddress,
        myAddressList,
        isMyAddress,
        setIsMyAddress,
        placeOrderData,
        setPlaceOrderData,
        isPlaceOrder,
        setIsPlaceOrder,
        handlePlaceOrder,
        isCart,
        setIsCart,
        handleDeleteCart,
        isMyOrder,
        setIsMyOrder,
        myOrdersList,
        placeOrderMount
    }}>
        {children}
    </AuthContext.Provider>
}