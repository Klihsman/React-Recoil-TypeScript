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
        debugger
        const storageUser = localStorage.getItem('user');

        if (storageUser) {
            const getUser: User = JSON.parse(storageUser || '');

            if (email === getUser.email && password === getUser.password) {
                setUser(getUser);
                navigate('/logged');
            } else {
                alert('Não foi possível logar');
            }
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
            <a href="/register">Cadastrar</a>
        </div>
    )
};