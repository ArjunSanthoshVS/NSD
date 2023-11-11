import { useNavigate } from 'react-router-dom'
import './IncomeComp.css'
import { Col, Container, Row } from 'react-bootstrap'

const IncomeComp = () => {
    const navigate = useNavigate()

    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">Income</h3>
            </div>

            <Row className="income-details">
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="EmploymentStatus">Employment Status</label>
                    <select id="EmploymentStatus" className='form-control'>
                        <option value="employeeAtCompany">Employee at a Company</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="retired">Retired</option>
                        <option value="vaccant">Vaccant</option>
                    </select>
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Job Title">Job Title</label>
                    <input type="text" name="jobTitle" id="" className='form-control' placeholder='Job Title' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Date of Joining">Date of Joining</label>
                    <input type="date" name="doj" id="" className='form-control' placeholder='D.O.J' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Company Name">Company Name</label>
                    <input type="text" name="CompanyName" id="" className='form-control' placeholder='Company Name' />
                </Col>
                <Col className='mb-5' sm={12} md={4} lg={4}>
                    <label htmlFor="Industry">Industry</label>
                    <select id="Industry" className='form-control'>
                        <option value="erpSolutions">ERP Solutions</option>
                        <option value="sample1">Sample1</option>
                        <option value="sample2">Sample2</option>
                        <option value="sample3">Sample3</option>
                    </select>
                </Col>


                <div className="id-header d-flex mb-4">
                    <h3 className=" mt-3 mb-0">Civil Status</h3>
                </div>

                <Row>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Martial Status">Martial Status</label>
                        <select id="Martial Status" className='form-control'>
                            <option value="married">Married</option>
                            <option value="unMarried">Un Married</option>
                        </select>
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Spouse Name">Spouse Name</label>
                        <input type="text" name="SpouseName" id="" className='form-control' placeholder='Spouse Name' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Number of Dependents">Number of Dependents</label>
                        <input type="number" name="" id="" className='form-control' placeholder='Number of Dependents' />
                    </Col>
                </Row>

                <div className="id-header mb-4">
                    <h3 className=" mt-3 mb-0">Income</h3>
                    <p className=" mt-1 mb-0">State out your Income and expenses  </p>
                </div>


                <Row>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Fixed Monthly Income">Fixed Monthly Income</label>
                        <input type="number" name="" id="" className='form-control' placeholder='Fixed Monthly Income' />
                    </Col>
                </Row>

                <div className="id-header mb-4">
                    <h3 className=" mt-3 mb-0">Beneficiary Details</h3>
                    <div className="d-flex mt-3 mb-3">
                        <input className='me-2' type="checkbox" /> <label htmlFor="" className='me-5'>Individual Client</label>
                        <input className='me-2' type="checkbox" /> <label htmlFor="">Corporate Client</label>
                    </div>
                </div>


                <Row>
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
                        <label htmlFor="Job Title">Job Title</label>
                        <input type="text" name="jobTitle" id="" className='form-control' placeholder='Job Title' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Emirates ID Number">Emirates ID Number</label>
                        <input type="number" name="EmiratesID" id="" className='form-control' placeholder='123456789' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Trade License">Trade License</label>
                        <input type="number" name="tradeLicense" id="" className='form-control' placeholder='123456789' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Trade Expiry Date">Trade Expiry Date</label>
                        <input type="date" name="ted" id="" className='form-control' placeholder='D.O.J' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" className='form-control' placeholder='Your Email' />
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
                        <label htmlFor="Phone Number">Phone Number</label>
                        <input type="number" name="phoneNumber" id="" className='form-control' placeholder='Phone Number' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Nationality">Nationality</label>
                        <input type="text" name="company" id="" className='form-control' placeholder='Nationality' />
                    </Col>
                    <Col className='mb-5' sm={12} md={4} lg={4}>
                        <label htmlFor="Martial Status">Martial Status</label>
                        <select id="Martial Status" className='form-control'>
                            <option value="married">Married</option>
                            <option value="unMarried">Un Married</option>
                        </select>
                    </Col>
                </Row>



                <div className="d-flex mt-3">
                    <input type="checkbox" className='d-flex mb-auto mt-2 me-2' /> <label>I agree to the terms and conditions</label>
                </div>

                <div className="w-100 d-flex justify-content-between mt-5 mb-5">
                    <button className='previous-button px-4' onClick={()=>navigate('/')}>Previous</button>
                    <button className='id-verify-button px-4' onClick={() => navigate('/loan')}>Submit & Next</button>
                </div>
            </Row>
        </Container>
    )
}

export default IncomeComp
