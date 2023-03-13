import User from "../../Interfaces/UserInterface";
import { useEffect, useState } from 'react';

export default function Home() {
    const [user, setUser] = useState<User | {}>({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);

    useEffect(() => {
        const user: User = JSON.parse(localStorage.getItem('user') || '');
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setAge(user.age);
        setUser(user);
    }, []);

    function submitControl() {
        console.log('logout');
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
                <button type="submit">Logout</button>
            </form>
        </div>
    )
};