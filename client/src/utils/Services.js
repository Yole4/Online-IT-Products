import axios from "axios";

export const baseUrl = "http://localhost:3001/api";
const token = localStorage.getItem('token');

export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });

    const data = await response.json();

    if (!response.ok) {
        let message;

        if (data?.message) {
            message = data.message;
        } else {
            message = data;
        }

        return { error: true, message };
    }

    return data;
};

export const getRequest = async (url) => {
    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer: ${token}`
        }
    });

    const data = await response.json();

    if (!response.ok) {
        let message = "An error occured...";

        if (data?.message) {
            message = data.message;
        }

        return { error: true, message };
    }
}

// export const getRequest = async (url) => {
//     const response = await fetch(url);

//     const data = await response.json();

//     if (!response.ok){
//         let message = "An error occured...";

//         if (data?.message){
//             message = data.message;
//         }

//         return {error: true, message};
//     }

//     return data;
// }