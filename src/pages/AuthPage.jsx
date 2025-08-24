import React from "react";
import "../styles/auth.css";
import { SignInButton } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand-container">
            <img src="/logo_sip.png" alt="logo" className="brand-logo" />
            <span className="brand-name">tsip</span>
          </div>

          <h1 className="hero-title">Where Work Happens.</h1>
          <p className="hero-subtitle">
            Connect with your team, manage projects, and get things done.
            real-time messaging.Experience seamless collaboration with powerful features designed for modern teams.
          </p>

          <div className="features-list">
             <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span>Real-time messaging</span>
             </div>
             <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video calling & meetings</span>
             </div>
             <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure & private</span>
             </div>
          </div>

          <SignInButton>
            <button className="cta-button">
              Get Started with Tsip
              <span className="button-arrow"></span>
            </button>
          </SignInButton>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-image-container">
          <img src="/auth-i.png" alt="auth" className="auth-image"/>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
