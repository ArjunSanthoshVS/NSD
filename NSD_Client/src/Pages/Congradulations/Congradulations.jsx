import CongradulateComp from "../../Components/CongradulateComp/CongradulateComp"
import HeadLists from "../../Components/HeadLists/HeadLists"
import Navbar from "../../Components/Navbar/Navbar"
import './Congradulations.css'

const Congradulations = () => {
    return (
        <div style={{ background: "#F1F3F9" }} className="pb-5 congrats">
            <Navbar />
            <HeadLists />
            <CongradulateComp />
            <img className="globe1" src="/Group 6congradulations.png" alt="" />
            <img className="globe2" src="/Vectorcongradulations.png" alt="" />
            <img className="globe3" src="/Vectorcongradulations-1.png" alt="" />
            <img className="globe4" src="/Vectorcongradulations-3.png" alt="" />
            <img className="globe5" src="/Vectorcongradulations-6.png" alt="" />
        </div>
    )
}

export default Congradulations
