import {AiOutlineLoading} from 'react-icons/ai'

const Loading = (props) => {
    return ( 
        <div className="flex justify-center items-center">
            <AiOutlineLoading size={props.size} className="animate-spin m-2"/>
        </div>
    );
}
 
export default Loading;