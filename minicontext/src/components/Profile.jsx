import  React from 'react'
import UserContext from '../context/UserContext'
function Profile() {

    const {user} = React.useContext(UserContext)
  
    if(!user){
        return <h1> no user</h1>
    }else{
        return(
            <div>
                <h1> {user.username}</h1>
                <h2> {user.password}</h2>
            </div>
        )
    }
}

export default Profile
