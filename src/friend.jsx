export default function Friend({friend}){
    console.log(friend)
    return (
        <div className="box">
            <h4>Name: {friend.name}</h4>
            <h4>Email: {friend.email}</h4>
        </div>
    )
}