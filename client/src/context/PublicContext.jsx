import { createContext, useCallback, useEffect, useState } from "react";
import {baseUrl, getRequest, postRequest } from "../utils/Services";
import { useNavigate } from "react-router-dom";

export const PublicContext = createContext();

export const PublicContextProvider = ({ children }) => { 

    const [publicLoading, setPublicLoading] = useState(false);

    // ===============================================  GET CATEGORY    =======================================
    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
        const getCategory = async () => {
            setPublicLoading(true);
            
            try {
                const response = await getRequest(`${baseUrl}/public/get-category`);

                setPublicLoading(false);

                if (response.error){
                    console.log(response.message);
                }else{
                    setCategoryList(response.message);
                }

            } catch (error) {
                setPublicLoading(false);
                console.log("Error: ", error);
            }
        };
        getCategory();
    }, []);

    // ===========================================  GET PRODUCTS    ============================================
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            setPublicLoading(true);

            try {
                const response = await getRequest(`${baseUrl}/public/fetch-products`);

                setPublicLoading(false);

                if (response.error){
                    console.log(response.message);
                }else{
                    setProductList(response.message);
                }
            } catch (error) {
                setPublicLoading(false);
                console.log("Error: ", error);
            }
        };
        getProduct();
    }, []);

    return <PublicContext.Provider value={{
        publicLoading,
        categoryList,
        productList
    }}>
        {children}
    </PublicContext.Provider>
}