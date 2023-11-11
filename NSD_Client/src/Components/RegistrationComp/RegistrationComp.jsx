import { Link, useNavigate } from 'react-router-dom'
import './RegistrationComp.css'
import { useState } from 'react';
import axios from 'axios'
import api from '../../api/api';
import Google from '../Google/Google';
const RegistrationComp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api.api}/register`, formData);
            console.log(response.data);
            localStorage.setItem("mobile", JSON.stringify(response?.data?.mobile));
            localStorage.setItem("email", JSON.stringify(response?.data?.email));
            navigate('/otp')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="FullRegistarion">
            <img className="w-50" src="/Shield.png" alt="" />
            <h2>Register your Account</h2>
            <p>See what is going on with your business</p>
            <Google/>
            <p>------------- or Register with Email ------------- </p>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter your Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your mail"
                        name="email"
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mt-4">
                    <button type="submit" className="w-100 register-button">
                        Confirm
                    </button>
                </div>
            </form>
            <p className='mt-4'>Already Registered? <Link style={{ color: "#DBA953", textDecoration: "none" }}>Login Here</Link></p>
        </div>
    )
}

export default RegistrationComp
