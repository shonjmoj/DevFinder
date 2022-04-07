import { useEffect, useState } from "react";

const useFetch = ((value) => {
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        fetch(`https://api.github.com/users/${value}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(true);
            });
    }, [value])
    return {
        user, isLoading
    }
})
 
export default useFetch;