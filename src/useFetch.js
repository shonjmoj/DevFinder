import { useEffect, useState } from "react";

const useFetch = ((value) => {
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        if (value !== 'undefined') {    
            fetch(`https://api.github.com/users/${value}`)
                .then(res => {
                    setIsLoading(true);
                    return res.json()
                })
                .then(data => {
                    setIsLoading(false);
                    setUser(data);
                })
        }
    }, [value])
    return {
        user, isLoading
    }
})
 
export default useFetch;