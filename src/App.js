import './App.css';
import React from 'react';
import InfoCard from './InfoCard';
import {useState} from 'react'
import useFetch from './useFetch'


function App() {
    const [value, setValue] = useState();
    const {user, isLoading} = useFetch(`${value}`);
    let updateUser;

    const changeHandler = (e) => {
        e.preventDefault();
        updateUser = e.target.value;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!updateUser) return;
        setValue(updateUser);
    }
    return (
        <div className="flex flex-col items-center max-w-[60%] container">
            <InfoCard changeHandler={changeHandler} 
                    submitHandler={submitHandler} 
                    user={user}
                    isLoading={isLoading}/>
        </div>
  );
}


export default App;