import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="login-container3">
            <div className="login-box">
                <h2>Login Here</h2>
                <form>
                    <input type="email" placeholder="Your Email Address" required />
                    <input type="password" placeholder="Your Password" required />
                    <div className="terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">Agree with <a href="/">Terms & Conditions</a></label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login
