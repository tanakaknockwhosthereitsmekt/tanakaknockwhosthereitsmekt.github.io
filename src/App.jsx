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
                        <span className="icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="black" strokeWidth="2" fill="none" />
                                <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2" fill="none" />
                                <circle cx="17" cy="7" r="1.25" fill="black" />
                            </svg>
                        </span>
                        <span className="text">@tanakapress</span>
                    </a>

                    <a href="mailto:kt@tanakapress.com" className="social-button email">
                        <span className="icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="6" width="18" height="12" rx="2" stroke="black" strokeWidth="2" fill="none" />
                                <path d="M3 6L12 13L21 6" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                        <span className="text">kt@tanakapress.com</span>
                    </a>

                    <a href="https://venmo.com/tanakapress" target="_blank" rel="noopener noreferrer" className="social-button venmo">
                        <span className="icon" aria-hidden="true">
                            <img src="/venmo-transparent-custom.svg" alt="Venmo" />
                        </span>
                        <span className="text">Venmo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App

