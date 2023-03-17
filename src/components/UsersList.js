import React from 'react'
import "./UserList.css"

export default function UsersList() {
    const userInfo = [{firstName:"Pravin",email:"pravin@gmail.com",city:"Klang",id:12},
                    {firstName:"Amir",email:"amir@gmail.com",city:"Kuala lumpur",id:22},
                    {firstName:"Seng Ho",email:"seng@gmail.com",city:"Putrajaya",id:517},
                    {firstName:"Lim",email:"lim@gmail.com",city:"Bangi",id:452},
                    {firstName:"Rami",email:"rami@gmail.com",city:"Kuching",id:812}];

    console.log("UserList is called");

   
  return (
    <div>
        <h1>UsersList</h1>
        <table className='userTable'>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {userInfo.map((userS) =>{
                    return(
                    <tr key={userS.id}>
                        <td>{userS.firstName}</td>
                        <td>{userS.email}</td>
                        <td>{userS.city}</td>
                        <td>{userS.id}</td>
                    </tr>
                    )
                    
                })}
            </tbody>

        </table>
     </div>
  )
}
