import {AiOutlineLoading} from 'react-icons/ai'
import Stat from './Stat';

const ReposAndFollowers = ({user, isLoading}) => {
    return (
        <div className="m-4 flex text-center justify-around w-[85%] bg-gray-900 rounded-xl drop-shadow-lg">
            <div className="p-4 items-center justify-center flex flex-col">
                <h3 className="text-lg">Repos</h3>
                {isLoading ? <AiOutlineLoading size={20} className="animate-spin"/> :
                    <Stat stat={user.public_repos}/>}
            </div>
            <div className="p-4 items-center justify-center flex flex-col">
                <h3 className="text-lg">Following</h3>
                {isLoading ? <AiOutlineLoading size={20} className="animate-spin"/> :
                    <Stat stat={user.following}/>}
            </div>
            <div className="p-4 items-center justify-center flex flex-col">
                <h3 className="text-lg">Followers</h3>
                {isLoading ? <AiOutlineLoading size={20} className="animate-spin"/> : 
                    <Stat stat={user.followers}/>}
            </div>
        </div>
    );
}
 
export default ReposAndFollowers;