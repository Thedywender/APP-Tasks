import { LoginFormProps } from '../interfaces/login';

const LoginForm: React.FC<LoginFormProps> = ({ onChange, onSubmit, input }) => {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} id='username' name='username' type="text" placeholder='Enter your username' value={input.username} />
            <input onChange={onChange} id='password' name='password' type="password" placeholder='Enter your password' value={input.password} />
            <p><a href='#password'>Forgot your Password</a></p>
            <button type="submit">Sign in</button>
        </form>
    );
};

export default LoginForm;