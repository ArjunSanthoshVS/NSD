import './OTP.css'
import SideImg from '../../Components/SideImg/SideImg'
import OtpInput from "otp-input-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';
import axios from 'axios';
import api from '../../api/api';
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";


const OTP = () => {
    const navigate = useNavigate()
    const phone = JSON.parse(localStorage.getItem("mobile"))
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': () => {
                    onSignup();
                },
                "expired-callback": () => { },
            },
                auth
            );
        }
    }

    const onSignup = async () => {
        setLoading(true);
        onCaptchVerify();

        console.log('jhbdsjhfb');
        const appVerifier = window.recaptchaVerifier;
        const formatPh = "+" + 91 + phone;
        try {
            // await axios.get(`${api.api}/isPh`, { params: { mobile: phone } })
            signInWithPhoneNumber(auth, formatPh, appVerifier)
                .then((confirmationResult) => {
                    console.log('hdbsjhfbs');
                    window.confirmationResult = confirmationResult;
                    console.log(confirmationResult);
                    setLoading(false);
                    setShowOTP(true);
                    toast.success("OTP sended successfully!");
                })
                .catch((error) => {
                    console.log('hdbsjhfbs');
                    console.log(error);
                    toast.error("some error occur..!")
                    setLoading(false);
                });
        } catch (error) {
            toast.error("Check your mobile number..!")
            setLoading(false)
        }
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res.user);
                const data = res.user.phoneNumber.slice(3);
                await axios.get(`${api.api}/otpVerify`, { params: { mobile: data } });
                navigate('/two-factor-authentication')
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid OTP");
                setLoading(false);
            });
    }

    return (
        <div className="d-flex w-100  p-3">
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            <SideImg />
            <div className="m-auto">
                {showOTP ? (
                    <>
                        <img className="w-25 mb-5" src="/Shield.png" alt="" />
                        <h2>OTP Verification</h2>
                        <p>Enter the verification code we just sent to your number {phone}.</p>
                        <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="opt-container"></OtpInput>
                        <p className='mt-4 text-center mb-5'>Didn’t receive code? <Link style={{ color: "#DBA953", textDecoration: "none" }}> Resend</Link></p>
                        <div className="text-center">
                            <button type="button" className='w-75 otp-button' onClick={onOTPVerify}>{loading && (
                                <CgSpinner size={20} className="animate-spin" />
                            )}<span>Verify</span></button>
                        </div>
                    </>
                ) : (
                    <>
                        <img className="w-25 mb-5" src="/Shield.png" alt="" />
                        <h2>OTP Verification</h2>
                        <p>We want to send an OTP to your given mobile number to Verify.</p>
                        <button className='otp-button px-5' onClick={onSignup}>{loading && (
                            <CgSpinner size={20} className="animate-spin" />
                        )}<span>Send OTP</span></button>
                    </>
                )}
            </div>
        </div>
    )
}

export default OTP;
