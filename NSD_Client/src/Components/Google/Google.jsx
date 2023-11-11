import { GoogleLogin } from '@react-oauth/google'
import { decodeJwt } from 'jose'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import api from '../../api/api'
const Google = () => {
    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
            const payload = credential ? decodeJwt(credential) : undefined;
            if (payload) {
                const response = await axios.get(`${api.api}/googleLogin`, {
                    headers: {
                        Authorization: `Bearer ${credential}`
                    }
                });
                const user = response.data;
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user));
                window.location = '/'; // Redirect the user to the home page
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };
    return (
        <>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="App d-flex justify-content-center my-4">
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={console.error}
                    useOneTap
                />
            </div>
        </>
    )
}

export default Google
