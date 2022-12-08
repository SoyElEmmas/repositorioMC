import { useState, useEffect } from "react";
export default function useFetch(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        /* promise */
        window
            .fetch(url) /* 'https://dummyjson.com/users' */
            .then(request => request.json())
            .then(response => setData(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return{
        data,
        loading
    };
};