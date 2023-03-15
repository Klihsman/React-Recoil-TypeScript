import { useNavigate } from "react-router-dom";

export default function In() {
    const navigate = useNavigate();

    function submitControl() {
        localStorage.removeItem('user');
        alert('usuário deslogado!');
        navigate('/login')
    }

    return (
        <>
            <h1>Você está logado!!</h1>
            <button onClick={() => submitControl()}>Logout</button>
        </>
    )
}