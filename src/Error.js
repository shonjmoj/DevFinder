const Error = (props) => {
    return (
        <div className="m-2 text-gray-100 text-lg font-semibold">
            <h2>{props.message}</h2>
        </div>
    );
}
 
export default Error;