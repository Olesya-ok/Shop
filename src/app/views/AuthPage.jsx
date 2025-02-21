import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import {useState} from "react";
import "../../styles/AuthModal.css"


function AuthModal({onClose}) {
    const [isSignUp, setIsSignUp] = useState(false);

    function toggleAuthModal() {
        setIsSignUp((prevState) => !prevState);
    }

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <div className="auth-modal-header">
                    <h2>{isSignUp ? "Create an account" : "Enter website with login"}</h2>
                    <button className="close-button" onClick={onClose}>❌</button>
                    <button className="sign-up-button"
                        onClick={toggleAuthModal}>{isSignUp ? "Already have an account? Sign in" : "Sign up"}</button>
                </div>
                <div className="auth-modal-body">
                {isSignUp ? <SignUp/> : <SignIn/>}
                </div>
            </div>

        </div>
    )
}

export default AuthModal;