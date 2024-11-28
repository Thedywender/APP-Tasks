import { useState } from 'react';
import folderImage from '../assets/folder.jpeg';

function Login() {

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log(input);
    };


    return (
        <>
            <h1>Welcome</h1>
            <img src={folderImage} alt="folder" />
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} id='username' name='username' type="text" placeholder='Enter your username' />
                <input onChange={handleChange} id='password' name='password' type="password" placeholder='Enter your password' />
                <a href='#password' >Forgot your Password</a>
                <button>Sign in</button>
            </form>
        </>
    );
}

export default Login;