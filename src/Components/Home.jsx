import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let Navigate = useNavigate()
    const [users, setuser] = useState([]);
    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setuser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3004/users/${id}`);
        loadUsers();
    };
    const handleview = (e) => {
        console.log(e);
        Navigate(`/user/${e}`)
    }
    const handleEdit=(id)=>{
        Navigate(`/user/edit/${id}`)
    }
    return (
        <div>
            <h1>Home Page</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th >#</th>
                        <th >Name</th>
                        <th >User Name</th>
                        <th >Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                               <span onClick={()=>handleEdit(user.id)}>Edit</span>
                                <span onClick={() => handleview(user.id)}>view</span>
                                <span

                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </span>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Home