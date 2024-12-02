import { useContext, useState } from 'react';
import folderImage from '../assets/folder.jpeg';
import Context from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { validatePassword, validateUsername } from '../utils/validation';

function Login() {

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const { onLogin } = useContext(Context);

    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateUsername(input.username)) {
            alert('Username must have at least 8 characters');
            return;
        }

        if (!validatePassword(input.password)) {
            alert('Password must have at least 8 characters, one number and one special character');
            return;
        }

        onLogin(input.username);
        navigate('/todo');
    }

    return (
        <>
            <h1>Welcome</h1>
            <img src={folderImage} alt="folder" />
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} id='username' name='username' type="text" placeholder='Enter your username' />
                <input onChange={handleChange} id='password' name='password' type="password" placeholder='Enter your password' />
                <p><a href='#password' >Forgot your Password</a></p>
                <button>Sign in</button>
            </form>
        </>
    );
}

export default Login;