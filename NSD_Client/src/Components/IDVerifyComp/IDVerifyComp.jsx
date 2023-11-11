import { Container, Row, Col } from 'react-bootstrap';
import './IDVerifyComp.css'
import { useNavigate } from 'react-router-dom';
const IDVerifyComp = () => {
    const navigate = useNavigate()
    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">ID Verification</h3>
            </div>

            <Row className="id-details">
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="ResidencyStatus">Residency Status</label>
                    <select id="ResidencyStatus" className='form-control'>
                        <option value="citizen">Citizen</option>
                        <option value="permanentResident">Permanent Resident</option>
                        <option value="visaHolder">Visa Holder</option>
                        <option value="other">Other</option>
                    </select>
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="EmiratesID">Emirates ID</label>
                    <input type="file" className='form-control' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Emirates ID Number">Emirates ID Number</label>
                    <input type="number" name="EmiratesID" id="" className='form-control' placeholder='123456789' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="First Name">First Name</label>
                    <input type="text" name="FirstName" id="" className='form-control' placeholder='First Name' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Last Name">Last Name</label>
                    <input type="text" name="LastName" id="" className='form-control' placeholder='Last Name' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="" className='form-control' placeholder='Email' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Date of Birth">Date of Birth</label>
                    <input type="date" name="dob" id="" className='form-control' placeholder='D.O.B' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Comapany">Comapany</label>
                    <input type="text" name="company" id="" className='form-control' placeholder='Comapny Name' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input type="number" name="phoneNumber" id="" className='form-control' placeholder='Phone Number' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Nationality">Nationality</label>
                    <input type="text" name="company" id="" className='form-control' placeholder='Nationality' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Martial Status">Martial Status</label>
                    <select id="MartialStatus" className='form-control'>
                        <option value="married">Married</option>
                        <option value="unmarried">Un Married</option>
                    </select>
                </Col>
                <div className="d-flex mt-3">
                    <input type="checkbox" className='d-flex mb-auto mt-2 me-2' /> <label>By continuing you accept our Terms of Service. <br />Also learn how we process your data in our <br />Privacy Policy and Cookies policy.</label>
                </div>

                <div className="text-end mb-5">
                    <button className='id-verify-button px-4' onClick={() => navigate('/income')}>Submit & Next</button>
                </div>
            </Row>
        </Container>
    );
}

export default IDVerifyComp;
