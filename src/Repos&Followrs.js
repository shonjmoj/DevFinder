const ReposAndFollowers = ({user}) => {
    return (
        <div className="m-4 flex text-center justify-around w-[85%] bg-gray-900 rounded-xl drop-shadow-lg">
            <div className="p-4">
                <h3 className="text-lg">Repos</h3>
                {user.public_repos ?
                    <h1 className="text-2xl font-semibold">{user.public_repos}</h1> :  
                    <h1 className="text-2xl font-semibold">-</h1>}
            </div>
            <div className="p-4">
                <h3 className="text-lg">Following</h3>
                {user.following ? <h1 className="text-2xl font-semibold">{user.following}</h1> : 
                    <h1 className="text-2xl font-semibold">-</h1>}
            </div>
            <div className="p-4">
                <h3 className="text-lg">Followers</h3>
                {user.followers ? <h1 className="text-2xl font-semibold">{user.followers}</h1> : 
                    <h1 className="text-2xl font-semibold">-</h1>}
            </div>
        </div>
    );
}
 
export default ReposAndFollowers;