import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className="login-container3">
            <div className="login-box">
                <h2>Register Here</h2>

                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="number" placeholder="Your What's Number" required />
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
    )
}

export default Register
