import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import axios from 'axios';
import Cookie from "universal-cookie";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Header from "../navMenu/Header";
const cookie = new Cookie();

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();

    const handleSubmit = async(e) => {
        console.log(formData)
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post(
                'http://localhost:9095/api/auth/authenticate',
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            if (response.status === 200) {
                // Save the authentication token as an HTTP-only cookie
                console.log("token : " + response.data.token)
                cookie.set("jwt",`${response.data.token}`,{sameSite:"strict"})
            }
            console.log('Login Successful');
            window.alert(cookie.get("jwt"));
            history.push('/product');
        } catch (error) {
            console.error('Login Error:', error);
        }
        setFormData({
            email: '',
            password: '',
        });
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
    <div>
        <Header/>
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    </div>
    );

}

export default Login;
