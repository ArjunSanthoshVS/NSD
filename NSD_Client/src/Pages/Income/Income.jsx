import HeadLists from "../../Components/HeadLists/HeadLists"
import IncomeComp from "../../Components/IncomeComp/IncomeComp"
import Navbar from "../../Components/Navbar/Navbar"

const Income = () => {
    return (
        <div style={{ background: "#F1F3F9" }} className="">
            <Navbar />
            <HeadLists />
            <IncomeComp/>
        </div>
    )
}

export default Income
