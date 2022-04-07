import useFetch from "./useFetch";
import { useState } from "react";
import {DiGithubAlt} from 'react-icons/di'
import ReposAndFollowers from "./Repos&Followrs";
import Loading from "./Loading";
import Profile from "./Profile";
import SearchInput from "./SearchInput";

const InfoCard = ({submitHandler, changeHandler, user}) => {
    return (
        <div className='bg-gray-800 w-full rounded-xl shadow-lg flex-col items-center'>
            <SearchInput submitHandler={submitHandler} changeHandler={changeHandler}/>
            <div className="flex flex-col items-center my-8 relative">
                <Profile user={user}/>
                <div className="flex absolute right-16 mx-2 mt-6">
                    {user.avatar_url ? <img src={user.avatar_url} alt="" className="w-36 h-3w-36 rounded-xl drop-shadow-xl"/> : 
                        <DiGithubAlt className="w-36 h-36 rounded-xl border-[1px] opacity-70"/>}
                </div>
                <ReposAndFollowers user={user}/>
            </div>
        </div>
    );
}
 
export default InfoCard;