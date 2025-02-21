import {useState} from "react";
import {auth} from "../../../Api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (copyPassword !== password) {
            setError("didn't match password")
            return;
        }

        if (!email || !password || !copyPassword) {
            setError("Enter email and/or password");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user);
                setError("");
                setEmail("");
                setCopyPassword("");
                setPassword("");
            })
            .catch((error) => setError(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <input placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            <input placeholder="Please enter your password"  value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            <input placeholder="Please enter your password again"  value={copyPassword} onChange={(e) => setCopyPassword(e.target.value)} type="password"/>
            <button>Create</button>
            {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </form>
    )
}

export default SignUp;