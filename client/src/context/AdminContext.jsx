import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { agetRequest, apostRequest, baseUrl } from "../utils/Services";
import { AuthContext } from "./AuthContext";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
    // Initialize state
    const [errorResponse, setErrorResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mount, setMount] = useState(false);

    const { userId, userCredentials } = useContext(AuthContext);

    // ========================================    ADD CATEGORY    ====================================
    const [categoryName, setCategoryName] = useState('');
    const [isAddCategories, setIsAddCategories] = useState(false);

    // Function to update the category name
    const updateCategoryName = useCallback((info) => {
        setCategoryName(info);
    }, []);

    // Function to handle adding a category
    const handleAddCategory = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        // No need to redefine userId; use the one from the AuthContext
        const data = { categoryName, userId: userId.id };

        try {
            const response = await apostRequest(`${baseUrl}/admin/add-category`, data);

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setMount(mount ? false : true);
                setIsAddCategories(false);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log('error: ', error);
        }
    };

    // ===============================  DELETE CATEGORIES   =========================================
    const [categoryId, setCategoryId] = useState({
        categoryId: null,
        categoryName: null
    });
    const [isDelete, setIsDelete] = useState(false);

    const updateCategoryId = useCallback((info) => {
        setCategoryId(info);
    }, []);

    const handleDeleteCategory = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const data = { categoryId: categoryId.categoryId, categoryName: categoryId.categoryName, userId: userId.id };

        try {
            const response = await apostRequest(`${baseUrl}/admin/delete-category`, data);

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setMount(mount ? false : true);
                setIsDelete(false);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log('error: ', error);
        }
    }

    // ==================================   EDIT CATEGORY   ================================================
    const [isEditCategories, setIsEditCategories] = useState(false);
    const [editCategoryName, setEditCategoryName] = useState(null);

    const updateEditCategoryName = useCallback((info) => {
        setEditCategoryName(info);
    }, []);

    const handleEditCategory = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const data = { categoryId: categoryId.categoryId, categoryName: editCategoryName, userId: userId.id };

        try {
            const response = await apostRequest(`${baseUrl}/admin/edit-category`, data);

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setMount(mount ? false : true);
                setIsEditCategories(false);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            setIsLoading(false);
            console.log('error: ', error);
        }
    }

    // =================================    FETCH CATEGORIES    ===========================================
    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
        if (userId) {
            setIsLoading(true);

            const fetchCategory = async () => {
                try {
                    const response = await agetRequest(`${baseUrl}/admin/fetch-category`, { userId: userId.id });

                    setIsLoading(false);

                    if (response.error) {
                        setErrorResponse({ message: response.message, isError: true });
                    } else {
                        setCategoryList(response.message);
                    }
                } catch (error) {
                    setIsLoading(false);
                    console.log('error: ', error);
                }
            };
            fetchCategory();
        }
    }, [mount, userId]);

    // ==============================================   EDIT USER   ==================================================
    const [userMount, setUserMount] = useState(false);

    const [editUserData, setEditUserData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        editId: ''
    });
    const [isEditUser, setIsEditUser] = useState(false);

    const handleEditUser = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const data = { editUserData, userId: userId.id };

        try {
            const response = await apostRequest(`${baseUrl}/admin/edit-user`, data);

            setIsLoading(false);

            if (response.error) {
                setErrorResponse({ message: response.message, isError: true });
            } else {
                setIsEditUser(false);
                setUserMount(userMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
            }

        } catch (error) {
            setIsLoading(false);
            console.log('error: ', error);
        }
    }

    // ==============================================   DELETE USER DATA    =================================================
    const [deleteData, setDeleteData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        deleteId: ''
    });
    const [isDeleteUser, setIsDeleteUser] = useState(false);

    const handleDeleteUser = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorResponse(null);

        const data = {deleteData, userId: userId.id};

        try {
            const response = await apostRequest(`${baseUrl}/admin/delete-user`, data);

            setIsLoading(false);

            if (response.error){
                setErrorResponse({ message: response.message, isError: true });
            }else{
                setIsDeleteUser(false);
                setUserMount(userMount ? false : true);
                setErrorResponse({ message: response.message, isError: false });
            }
        } catch (error) {
            
        }
    }

    // ================================================ FETCH ALL USERS =================================================
    const [usersList, setUsersList] = useState(null);
    const [searchUser, setSearchUser] = useState('');

    useEffect(() => {
        if (userId) {
            setIsLoading(true);

            const fetchUsers = async () => {
                try {
                    const response = await agetRequest(`${baseUrl}/admin/fetch-users`);

                    setIsLoading(false);

                    if (response.error) {
                        setErrorResponse({ message: response.message, isError: true });
                    } else {
                        setUsersList(response.message);
                    }

                } catch (error) {
                    setIsLoading(false);
                    console.log('error: ', error);
                }
            };
            fetchUsers();
        }
    }, [userId, userMount]);

    const usersListToSearch = usersList?.filter(item =>
        item.first_name.toLowerCase().includes(searchUser.toLowerCase()) ||
        item.middle_name.toLowerCase().includes(searchUser.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <AdminContext.Provider
            value={{
                categoryName,
                updateCategoryName,
                handleAddCategory,
                errorResponse,
                isLoading,
                categoryList,
                isAddCategories,
                setIsAddCategories,
                categoryId,
                updateCategoryId,
                handleDeleteCategory,
                isDelete,
                setIsDelete,
                isEditCategories,
                setIsEditCategories,
                handleEditCategory,
                editCategoryName,
                updateEditCategoryName,
                usersListToSearch,
                searchUser,
                setSearchUser,
                editUserData,
                setEditUserData,
                handleEditUser,
                isEditUser,
                setIsEditUser,
                deleteData,
                setDeleteData,
                handleDeleteUser,
                isDeleteUser,
                setIsDeleteUser,
                usersList
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};
