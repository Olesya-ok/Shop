import {useState} from "react";
import {auth} from "../../../Api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin(e) {
        e.preventDefault();


        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user);
                setError("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => setError("SORRY, COULDN'T FIND YOUR ACCOUNT"));
    }

    return (
        <form >
            <h2>Login</h2>
            <input placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            <input placeholder="Please enter your password"  value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button onClick={handleLogin}>Login</button>
            {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </form>
    )
}

export default SignIn;