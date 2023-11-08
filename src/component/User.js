import React from 'react'

const User = ({users}) => {
    return (
        <>
            <h1>User comp</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {
                     users.map(user =>(
                        <tbody>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                     ))
                }
            </table>
        </>
    )
}

export default User