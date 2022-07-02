import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3004/users/${id}`);
        console.log(res.data);
        setUser(res.data);
    };
    return (
        <div>
            <h1 >User Id: {id}</h1>
            <hr />
            <ul >
                <li>name: {user.name}</li>
                <li>user name: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>website: {user.website}</li>
            </ul>

        </div>
    )
}

export default User