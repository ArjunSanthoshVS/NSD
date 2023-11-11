import axios from "axios";
import './Payment.css'
import api from "../../api/api";
const Payment = () => {
    const handlePayment = () => {
        const date = Date.now();
        const user = JSON.parse(localStorage.getItem("user"));
        const userName = user?.user?.fullName;

        // Send a request to the server to initiate the payment
        axios
            .post(`${api.api}/payment`, {
                amount: 230,
                userId: user?.user?._id,
                userName: userName,
                createdAt: date
            })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div>
            <button className="id-verify-button px-4" onClick={() => handlePayment()}>Pay Now</button>
        </div>
    )
}

export default Payment;
