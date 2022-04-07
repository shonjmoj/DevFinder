import {FaLocationArrow} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'

const Profile = ({user}) => {
    return (
    <div className='self-start mx-16 flex flex-col'> 
        {user.name ? <h1 className="text-4xl text-gray-50 m-1">{user.name}</h1> :
            <h1 className="text-2xl m-1 text-gray-400">Name</h1>}
        {user.login ? <h1 className="text-gray-300 lowercase ml-2 my-1">@{user.login}</h1> :
            <h1 className="ml-2 my-1 text-gray-400">@pseudo</h1>}
        {user.bio ? <p className="text-lg text-gray-300 ml-2 my-1 pr-40">{user.bio}</p> :
            <h1 className="text-xl ml-2 my-1 text-gray-400">Bio</h1>}
        {user.blog ?
            <div className="flex items-center ml-2 my-1 text-gray-300">
                <BiLink size={18} className="mr-2"/>
                <a href={user.blog} className="text-gray-300 underline">{user.blog}</a>
            </div>
            :
            <div className="flex items-center ml-2 my-1 text-gray-400">
                <BiLink size={18} className="mr-2"/>
                <h1>Website</h1>
            </div>
            }
        {user.twitter_username ? 
            <div className="flex items-center ml-2 my-1 text-blue-600">
                <BsTwitter size={17} className="mr-2"/>
                <a href={`https://twitter.com/${user.twitter_username}`}>{user.twitter_username}</a>
            </div>
            :
            <div className="flex items-center ml-2 my-1 text-gray-400">
                <BsTwitter size={17} className="mr-2"/>
                <h1>Twitter</h1>
            </div>
            }
        {user.location ? 
            <div className="flex items-center ml-2 my-1 text-gray-400">
                <FaLocationArrow size={16} className="mr-2"/>
                <h1 className="text-xl">{user.location}</h1>
            </div>
            :
            <div className="flex items-center ml-2 my-1 text-gray-400">
                <FaLocationArrow size={15} className="mr-2"/>
                <h1 className="text-xl">Location</h1>
            </div>}
    </div>
    );
}
 
export default Profile;