import { Link, useNavigate } from "react-router-dom"
import SideImg from "../../Components/SideImg/SideImg"
import './TwoFactor.css'
import axios from "axios"
import api from "../../api/api"
import { useState } from "react"
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";


const TwoFactor = () => {
    const navigate = useNavigate()
    const email = JSON.parse(localStorage.getItem("email"))
    const [otp, setOtp] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [loading, setLoading] = useState(false);


    const sendOTP = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${api.api}/emailOTP`, { email });
            console.log(response);
            setLoading(false)
            setShowOTP(true)
            toast.success("OTP sended successfully!");
        } catch (error) {
            toast.error("some error occur..!")
            setLoading(false)
        }
    };

    const verifyOTP = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${api.api}/verifyEmailOtp`, { email, otp });
            console.log(response);
            setLoading(false)
            navigate('/login')
        } catch (error) {
            toast.error("Invalid OTP");
            setLoading(false)
        }
    };

    return (
        <div className="d-flex w-100 p-3">
            <Toaster toastOptions={{ duration: 4000 }} />
            <SideImg />
            <div className="m-auto">
                {showOTP ? (
                    <>
                        <img className="w-25 mb-5" src="/Shield.png" alt="" />
                        <h2>Set-up Two Factor Authentication</h2>
                        <p>Please enter the six digit code sent to {email}</p>
                        <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="otp-container justify-content-center my-5"></OtpInput>
                        <p className='mt-4 text-center mb-5'>Didn’t receive code? <Link style={{ color: "#DBA953", textDecoration: "none" }}> Resend</Link></p>
                        <div className="text-center">
                            <button type="submit" className='w-75 two-factor-otp-button' onClick={verifyOTP}>{loading && (
                                <CgSpinner size={20} className="animate-spin" />
                            )}<span>Verify</span></button>
                        </div>
                    </>
                ) : (
                    <>
                        <img className="w-25 mb-5" src="/Shield.png" alt="" />
                        <h2>Set-up Two Factor Authentication</h2>
                        <p>Receive information by email  to set-up  for 2-factor authentication</p>
                        <p>{email}</p>
                        <div className="text-center">
                            <button type="button" className='w-75 two-factor-button' onClick={sendOTP}>{loading && (
                                <CgSpinner size={20} className="animate-spin" />
                            )}<span>Verify</span></button>
                            <button type="reset" className='w-75 cancel-button mt-4'>Cancel</button>
                        </div>
                        <div className="text-end mt-5">
                            <Link to='/login' style={{ color: "#DBA953", textDecoration: "none" }}> Skip</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default TwoFactor
