import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Adduser = () => {
    const Navigate = useNavigate();
    const [user, setuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3004/users", user)
        Navigate("/")
    }

    const { name, username, email, phone, website } = user;

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

export default Adduser