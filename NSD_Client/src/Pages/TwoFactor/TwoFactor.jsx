import { Link } from "react-router-dom"
import SideImg from "../../Components/SideImg/SideImg"
import './TwoFactor.css'
const TwoFactor = () => {
    return (
        <div className="d-flex w-100 p-3">
            <SideImg />
            <div className="m-auto">
                <img className="w-25 mb-5" src="/Shield.png" alt="" />
                <h2>Set-up Two Factor Authentication</h2>
                <p>Receive information by email  to set-up  for 2-factor authentication</p>
                <div className="text-center">
                    <button type="submit" className='w-75 two-factor-button'>Verify</button>
                    <button type="reset" className='w-75 cancel-button mt-4'>Cancel</button>
                </div>
                <div className="text-end mt-5">
                    <Link to='/login' style={{ color: "#DBA953", textDecoration: "none" }}> Skip</Link>
                </div>
            </div>
        </div>
    )
}

export default TwoFactor
