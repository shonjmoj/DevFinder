const SearchInput = ({changeHandler, submitHandler}) => {
    return (
        <div className="flex justify-between items-center bg-slate-700 rounded-xl drop-shadow-xl">
            <form className="w-full" onChange={changeHandler} onSubmit={submitHandler}>
                <input type="text"
                    placeholder="Enter name here..."
                    required
                    className="h-12 bg-transparent w-full outline-none mx-4"/>
            </form>
            <button className="m-2 p-2 bg-slate-900 rounded-xl outline-none drop-shadow-lg
                hover:bg-blue-700 transition-all duration-300 ease-out hover:px-3"
                onClick={submitHandler}>Search</button>
        </div>
    );
}
 
export default SearchInput;