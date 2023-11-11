import { Col, Container, Row } from "react-bootstrap"
import './LoanDetailsComp.css'
import { useNavigate } from "react-router-dom"
const LoanDetailsComp = () => {
    const navigate = useNavigate()
    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">Loan</h3>
            </div>

            <Row className="loan-details">
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="What Product do you apply for?">What Product do you apply for?</label>
                    <select id="What Product do you apply for?" className='form-control'>
                        <option value="Mortgage EMI Sleeping Period">Mortgage EMI Sleeping Period</option>
                        <option value="sample">Sample</option>
                    </select>
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Sleeping Period Duration">Sleeping Period Duration</label>
                    <select id="Sleeping Period Duration" className='form-control'>
                        <option value="11 Months">11 Months</option>
                        <option value="10 Months">10 Months</option>
                    </select>
                </Col>

                <div className="id-header d-flex mb-4">
                    <h3 className=" mt-3 mb-0">Current Loan & Mortgage Deatils</h3>
                </div>

                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Purchase Price">Purchase Price</label>
                    <input type="number" name="" id="" className='form-control' placeholder='Purchase Price' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Mortgage Amount ">Mortgage Amount </label>
                    <input type="number" name="" id="" className='form-control' placeholder='Mortgage Amount ' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Duration of Loan (in months)">Duration of Loan (in months)</label>
                    <input type="number" name="" id="" className='form-control' placeholder='Duration of Loan (in months)' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Loan Amount">Loan Amount</label>
                    <input type="number" name="" id="" className='form-control' placeholder='Loan Amount' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Loan Paid Till Date">Loan Paid Till Date</label>
                    <input type="date" name="" id="" className='form-control' placeholder='Loan Paid Till Date' />
                </Col>


                <div className="id-header d-flex mb-4">
                    <h3 className=" mt-3 mb-0">Loan & Mortgage Document</h3>
                </div>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <div className="card text-center p-4 pt-5">
                        <h4 className="mt-3 mb-4">Upload Document 1</h4>
                        <i className="fa-solid fa-cloud-arrow-up" style={{ color: "#dba953", fontSize: "xxx-large" }}></i>
                        <h5>Drag & drop files or Browse</h5>
                        <p>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                        <button className="w-100 upload-button py-1">UPLOAD FILES</button>
                    </div>
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <div className="card text-center p-4 pt-5">
                        <h4 className="mt-3 mb-4">Upload Document 2</h4>
                        <i className="fa-solid fa-cloud-arrow-up" style={{ color: "#dba953", fontSize: "xxx-large" }}></i>
                        <h5>Drag & drop files or Browse</h5>
                        <p>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                        <button className="w-100 upload-button py-1">UPLOAD FILES</button>
                    </div>
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <div className="card text-center p-4 pt-5">
                        <h4>Upload Additional Documents</h4>
                        <i className="fa-solid fa-cloud-arrow-up" style={{ color: "#dba953", fontSize: "xxx-large" }}></i>
                        <h5>Drag & drop files or Browse</h5>
                        <p>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                        <button className="w-100 upload-button py-1">UPLOAD FILES</button>
                    </div>
                </Col>

                <div className="w-100 d-flex justify-content-between mt-5 mb-5">
                    <button className='previous-button px-4' onClick={() => navigate('/income')}>Previous</button>
                    <button className='id-verify-button px-4' onClick={() => navigate('/agreement')}>Submit & Next</button>
                </div>

            </Row>
        </Container>
    )
}

export default LoanDetailsComp
