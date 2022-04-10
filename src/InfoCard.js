import useFetch from "./useFetch";
import { useState } from "react";
import ReposAndFollowers from "./Repos&Followrs";
import Loading from "./Loading";
import Profile from "./Profile";
import SearchInput from "./SearchInput";
import {AiOutlineLoading} from 'react-icons/ai'
import Avatar from "./Avatar";


const InfoCard = ({submitHandler, changeHandler, user, isLoading}) => {
    return (
        <div className='bg-gray-800 w-full rounded-xl shadow-lg flex-col items-center'>
            <SearchInput submitHandler={submitHandler} 
                        changeHandler={changeHandler}
                        user={user}
                        isLoading={isLoading}/>
            <div className="flex flex-col items-center my-8 relative">
                <Profile user={user}/>
                <div className="flex absolute right-16 mx-2 mt-6">
                    {isLoading ? <AiOutlineLoading size={85} className="animate-spin"/> :
                        <Avatar avatar={user.avatar_url} />}
                </div>
                <ReposAndFollowers user={user} isLoading={isLoading}/>
            </div>
        </div>
    );
}
 
export default InfoCard;