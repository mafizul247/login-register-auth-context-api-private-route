import googleIcon from './../assets/google-icon.png'
import gitHubIcon from './../assets/gitHub-icon.png'
// import facebookIcon from './../assets/facebook-icon.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                navigate(from, { replace: true });
            }).catch(error => {
                console.log(error);
            })
    }

    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                navigate(from, { replace: true });
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='border border-1px solid rounded p-2 text-center bg-white flex justify-center gap-3'>
            <div >
                <img onClick={handleGoogleLogin} className='rounded-circle' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={googleIcon} alt="Google" />
            </div>
            <div>
                <img onClick={handleGitHubLogin} className='rounded-circle' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={gitHubIcon} alt="GitHub" />
            </div>
            {/* <div>
                <img className='rounded-circle mr-3' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={facebookIcon} alt="Facebook" />
            </div> */}
        </div>
    );
};

export default SocialLogin;