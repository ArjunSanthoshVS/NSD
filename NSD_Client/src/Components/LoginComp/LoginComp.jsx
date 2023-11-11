import { Link } from 'react-router-dom'
import './LoginComp.css'
import { useState } from 'react';
import axios from 'axios';
import api from '../../api/api';
import Google from '../Google/Google';
const LoginComp = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api.api}/login`, loginData);
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload()
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="FullLogin">
            <img className="w-50" src="/Shield.png" alt="" />
            <h2>Login to your Account</h2>
            <p>See what is going on with your business</p>
            <Google/>
            <p>------------- or Sign in with Email ------------- </p>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your mail"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your Password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="m-2 d-flex justify-content-between">
                        <div>
                            <input type="checkbox" className='me-2' /><label htmlFor="remember">Remember Me</label>
                        </div>
                        <Link to="/forgot-password" style={{ textDecoration: "none", color: "#DBA953" }}>Forgot Password?</Link>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className='w-100 login-button'> Login</button>
                </div>
            </form>
            <p className='mt-4'>Not Registered Yet? <Link to="/registration" style={{ color: "#DBA953", textDecoration: "none" }}> Create an account</Link></p>
        </div>
    )
}

export default LoginComp
