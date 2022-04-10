const Stat = ({stat}) => {
    return (
        <div>
            {stat ? <h1 className="text-2xl font-semibold">{stat}</h1> : 
                <h1 className="text-2xl font-semibold">-</h1>}
        </div>
    );
}
 
export default Stat;