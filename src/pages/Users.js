import React from 'react'
import UsersList from '../components/UsersList'
import "./Users.css"

function Users() {

  // var heading = ['Name','City','Course'];
  // var body = [['Pravin','Klang','Software Engineering'],
  //             ['Seng Ho','Kuala Lumpur','Computer Science'],
  //             ['Lim','Johor Baru','Culinary'],
  //             ['Amir','Bangi','Business Management']];
  

  
  return (
    <div className='users' >
        <h1>UserData</h1>
        <br></br>
        <div>
        <p className='description'>Planning on using display user data here in a list using Rxjs best practices.<br/>
           Will create and store dummy data in firebase soon, for now data is staticly created with an array.</p>
        </div>
        <div className='userTable'>
          <UsersList/>
        </div>
       
        
    </div>
  )
}

export default Users