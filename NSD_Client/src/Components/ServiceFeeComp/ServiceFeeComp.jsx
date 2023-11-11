import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Payment from "../Payment/Payment"

const ServiceFeeComp = () => {
    const navigate = useNavigate()
    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">Service Fee</h3>
            </div>

            <div className="service-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit </p>
                <button className="agreement-download p-2 px-4 my-5">MASTER AGREEMENT <span><i className="fa-solid fa-download" style={{ color: "#ffffff", fontSize: "large" }}></i></span></button>
            </div>

            <div className="signature mb-5">
                <p>Signature <span className="text-danger">*</span></p>
                <textarea className="signature-textarea" name="" id="" rows="5" placeholder="Sign Here"></textarea>
            </div>

            <p className="mb-5 ms-0">If you are experience any issues with digital signature, you may download PDF file. put your signature and upload it back or send via email.</p>

            <h3 className="mt-3 mb-0">Payment Method</h3>
            <Row className="mt-5 w-100">
                <Col className='mb-5' sm={12} md={6} lg={6}>
                    <img className="w-100  " src="/atm-frond.png" alt="" />
                </Col>
                <Col className='mb-5' sm={12} md={6} lg={6}>
                    <img className="w-100" src="/atm-back.png" alt="" />
                </Col>
            </Row>
            <Row className="mt-5 w-100">
                <Col className='mb-5 text-center' sm={6} md={3} lg={3}>
                    <img className="w-75" src="/Stripe-Symbol.png" alt="" />
                </Col>
                <Col className='mb-5 text-center' sm={6} md={3} lg={3}>
                    <img className="w-75" src="/Stripe-Symbol.png" alt="" />
                </Col>
                <Col className='mb-5 text-center' sm={6} md={3} lg={3}>
                    <img className="w-75" src="/Stripe-Symbol.png" alt="" />
                </Col>
                <Col className='mb-5 text-center' sm={6} md={3} lg={3}>
                    <img className="w-75" src="/Stripe-Symbol.png" alt="" />
                </Col>
            </Row>


            <div className="w-100 d-flex justify-content-between mt-5 mb-5">
                <button className='previous-button p-2 px-4' onClick={() => navigate('/agreement')}>Previous</button>
                <Payment/>
            </div>

        </Container>
    )
}

export default ServiceFeeComp
