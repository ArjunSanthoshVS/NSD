import HeadLists from "../../Components/HeadLists/HeadLists"
import LoanDetailsComp from "../../Components/LoanDetailsComp/LoanDetailsComp"
import Navbar from "../../Components/Navbar/Navbar"

const LoanDetails = () => {
  return (
      <div style={{ background: "#F1F3F9" }} className="pb-5">
          <Navbar />
          <HeadLists />
          <LoanDetailsComp/>
    </div>
  )
}

export default LoanDetails
