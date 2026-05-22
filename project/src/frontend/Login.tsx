import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

  const navigate = useNavigate();

  return (
    <>
        <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <button type="button" onClick={() => navigate('/create')}>
                Create Account
            </button>
        </form>
        </div>
    </>
  );
}



export default Login;