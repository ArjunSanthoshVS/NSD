import { Container } from "react-bootstrap"
import './CongradulateComp.css'
import { useNavigate } from "react-router-dom"
const CongradulateComp = () => {
    const navigate = useNavigate()
    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">COMPLETION</h3>
            </div>
            <div className="main-img-div">
                <img className="main-img" src="/congradulations.png" alt="" />
            </div>
            <div className="congrats-img-div">
                <img className="congrats-img" src="/Order completed!congradulations.png" alt="" />
            </div>
            <div className="w-100 text-center mt-5">
                <p className="fw-bold">You have now enrolled into you Money Protects Program. <br />Looking Forward</p>
            </div>
            <div className="w-100 text-center mt-5">
                <button className="home-button p-1 px-5" onClick={() => navigate('/')}>Home</button>
            </div>

        </Container>
    )
}

export default CongradulateComp
