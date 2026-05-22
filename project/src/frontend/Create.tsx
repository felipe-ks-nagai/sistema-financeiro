import './Create.css';
import { useNavigate } from 'react-router-dom';

function Create() {
const navigate = useNavigate();

    return (
        <>
            <div className="create-container">
                <h2>Create Account</h2>
                    <form className="create-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Create Account</button>
                    <button type="button" onClick={() => navigate('/')}>
                        Back to Login
                    </button>
                </form>
            </div>
        </>
);
}

export default Create;