import AgreementComp from "../../Components/AgreementComp/AgreementComp"
import HeadLists from "../../Components/HeadLists/HeadLists"
import Navbar from "../../Components/Navbar/Navbar"

const Agreement = () => {
    return (
        <div style={{ background: "#F1F3F9" }} className="pb-5">
            <Navbar />
            <HeadLists />
            <AgreementComp />
        </div>
    )
}

export default Agreement
