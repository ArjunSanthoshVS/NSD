import { Container } from "react-bootstrap"
import './AgreementComp.css'
import { useNavigate } from "react-router-dom"
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { useState } from "react"
import { CgSpinner } from "react-icons/cg";

const AgreementComp = () => {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const downloadPDF = () => {
        const capture = document.querySelector('.container')
        setLoader(true)
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png')
            const doc = new jsPDF('p', 'mm', 'a4')
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
            setLoader(false)
            doc.save('Agreement.pdf')
        })
    }
    return (
        <Container className="w-75 mt-5">
            <div className="id-header d-flex mb-4">
                <img src="/VectorVerification.png" alt="" />
                <h3 className="ms-4 mt-3 mb-0">Agreement</h3>
            </div>

            <div className="agreement-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit </p>
                <button className="agreement-download p-2 px-4 my-5" onClick={downloadPDF}>MASTER AGREEMENT
                    {loader ? (
                        <CgSpinner size={20} className="animate-spin" />
                    ) : (
                        <span><i className="fa-solid fa-download" style={{ color: "#ffffff", fontSize: "large" }}></i></span>
                    )}
                </button>
            </div >

            <div className="signature mb-5">
                <p>Signature <span className="text-danger">*</span></p>
                <textarea className="signature-textarea" name="" id="" rows="5" placeholder="Sign Here"></textarea>
            </div>

            <p>If you are experience any issues with digital signature, you may download PDF file. put your signature and upload it back or send via email.</p>

            <div className="card text-center p-4 pt-5 w-50 py-5 border-0 mt-5">
                <i className="fa-solid fa-cloud-arrow-up mt-5" style={{ color: "#dba953", fontSize: "xxx-large" }}></i>
                <h5>Drag & drop files or Browse</h5>
                <p>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                <button className="w-100 upload-button py-1">UPLOAD FILES</button>
            </div>

            <div className="w-100 d-flex justify-content-between mt-5 mb-5">
                <button className='previous-button px-4' onClick={() => navigate('/loan')}>Previous</button>
                <button className='id-verify-button px-4' onClick={() => navigate('/service-fee')}>Submit & Next</button>
            </div>

        </Container >
    )
}

export default AgreementComp
