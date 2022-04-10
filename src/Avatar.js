import {DiGithubAlt} from 'react-icons/di'

const Avatar = ({avatar}) => {
    return (
        <div className='w-full flex justify-center items-center'>
            {avatar ? <img src={avatar} alt="" className="w-36 h-3w-36 rounded-xl drop-shadow-xl"/> : 
                            <DiGithubAlt className="w-36 h-36 rounded-xl border-[1px] opacity-70"/>}
        </div>
    );
}
 
export default Avatar;