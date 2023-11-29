import React, {useState} from 'react';
import {login, logout, registration} from "../firebase/auth-service";

const AuthComponent: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <div>
                <input type={'text'} placeholder={'Type your email'} value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <input type={'text'} placeholder={'Type your password'} value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => registration(email, password)}>Registration</button>
                <button onClick={() => login(email, password)}>Login</button>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
};

export default AuthComponent