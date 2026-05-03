import './App.css'

function App() {
    return (
        <div className="app-container">
            <div className="decorative-background"></div>

            <div className="card">
                <div className="profile-section">
                    <img
                        src="kt.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>

                <h1 className="title">Tanaka Press</h1>
                <p className="tagline">Linocut printmaker in Eugene, Oregon</p>

                <div className="social-links">
                    <a href="https://instagram.com/tanakapress" target="_blank" rel="noopener noreferrer" className="social-button instagram">
                        <span className="icon">📷</span>
                        <span className="text">@tanakapress</span>
                    </a>

                    <a href="mailto:kt@tanakapress.com" className="social-button email">
                        <span className="icon">✉️</span>
                        <span className="text">kt@tanakapress.com</span>
                    </a>

                    <a href="https://venmo.com/tanakapress" target="_blank" rel="noopener noreferrer" className="social-button venmo">
                        <span className="icon">💳</span>
                        <span className="text">Venmo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App

