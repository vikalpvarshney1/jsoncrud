import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
    const Navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}`, user)
        Navigate("/")
    }
    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text"
                    placeholder='Enter your Name'
                    name='name'
                    value={name}
                    onChange={(e) => onInputChange(e)}
                />
                <br />
                <input type="text"
                    placeholder='Enter your Name'
                    name='username'
                    value={username}
                    onChange={(e) => onInputChange(e)}
                />
                <br />
                <input type="text"
                    placeholder='Enter your Name'
                    name='email'
                    value={email}
                    onChange={(e) => onInputChange(e)}
                />
                <br />
                <input type="text"
                    placeholder='Enter your Name'
                    name='phone'
                    value={phone}
                    onChange={(e) => onInputChange(e)}
                />
                <br />
                <input type="text"
                    placeholder='Enter your Name'
                    name='website'
                    value={website}
                    onChange={(e) => onInputChange(e)}
                />
                <br />
                <button>Add user</button>


            </form>


        </div>
    )
}

export default EditUser