import User from '../../Interfaces/UserInterface';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { UserState } from '../../Stores/UserStore';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useRecoilState(UserState);
    const navigate = useNavigate();

    function submitControl() {
        const getUser: User = JSON.parse(localStorage.getItem('user') || '');

        if (email === getUser.email && password === getUser.password) {
            setUser(getUser);
            navigate('/');
        } else {
            alert('Não foi possível logar');
        }
    }

    return (
        <div>
            <form onSubmit={() => submitControl()}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit">Logar</button>
            </form>
        </div>
    )
};