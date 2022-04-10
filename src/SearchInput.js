import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = ({changeHandler, submitHandler, user, isLoading}) => {
    return (
        <div className="flex justify-between items-center bg-slate-700 rounded-xl drop-shadow-xl">
            <AiOutlineSearch size={30} className="mx-4 text-gray-300"/>
            <form className="w-full" onSubmit={submitHandler}>
                <input type="text"
                    placeholder="Enter name here..."
                    required
                    className="h-12 bg-transparent w-full outline-none mx-4 
                            placeholder:text-gray-300 placeholder:font-light"
                    onChange={changeHandler}/>
            </form>
            <button className="m-2 p-3 bg-slate-900 rounded-xl outline-none drop-shadow-lg group
                    hover:bg-blue-700 transition-all duration-300 hover:px-4"
                    type='submit'
                    onClick={submitHandler}>
                    Search
                </button>
        </div>
    );
}
 
export default SearchInput;