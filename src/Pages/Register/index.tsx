import User from "../../Interfaces/UserInterface";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = useState<User | {}>({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const navigate = useNavigate();

    function submitControl() {
        const postUser: User = {
            name,
            email,
            password,
            age
        }

        localStorage.setItem('user', JSON.stringify(postUser));
         navigate('/login');
    }

    return (
        <div>
            <form onSubmit={() => submitControl()}>
                <div>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Idade</label>
                    <input type="number" name="" id="" value={age} onChange={(e) => { setAge(e.target.value as unknown as number) }} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
};