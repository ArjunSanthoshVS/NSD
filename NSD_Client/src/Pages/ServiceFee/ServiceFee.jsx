import HeadLists from "../../Components/HeadLists/HeadLists"
import Navbar from "../../Components/Navbar/Navbar"
import ServiceFeeComp from "../../Components/ServiceFeeComp/ServiceFeeComp"

const ServiceFee = () => {
    return (
        <div style={{ background: "#F1F3F9" }} className="pb-5">
            <Navbar />
            <HeadLists />
            <ServiceFeeComp/>
        </div>
    )
}

export default ServiceFee
