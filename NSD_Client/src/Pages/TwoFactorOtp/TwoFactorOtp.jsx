import { Link } from "react-router-dom";
import SideImg from "../../Components/SideImg/SideImg"
import OtpInput from "otp-input-react";
import './TwoFactorOtp.css'
const TwoFactorOtp = () => {
    return (
        <div className="d-flex w-100 p-3">
            <SideImg />
            <div className="m-auto">
                <img className="w-25 mb-5" src="/Shield.png" alt="" />
                <h2>Set-up Two Factor Authentication</h2>
                <p>Please enter the six digit code sent to kau******@moneyprotect.com</p>
                <OtpInput OTPLength={6} otpType="number" disabled={false} autoFocus className="otp-container justify-content-center my-5"></OtpInput>
                <p className='mt-4 text-center mb-5'>Didn’t receive code? <Link style={{ color: "#DBA953", textDecoration: "none" }}> Resend</Link></p>
                <div className="text-center">
                    <button type="submit" className='w-75 two-factor-otp-button'>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default TwoFactorOtp
