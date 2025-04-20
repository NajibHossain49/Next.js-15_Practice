"use client";
export default function forgotPassword() {
    return (
        <div>
            <h1>Forgot Password</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}
// This code defines a simple "Forgot Password" page in a React application.