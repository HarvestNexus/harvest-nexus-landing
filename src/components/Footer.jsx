import React from "react";
import LinkedIn from '../assets/icons/linkedin.svg';
import XIcon from '../assets/icons/x.svg';
import Mail from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone.svg';
import Location from '../assets/icons/location.svg';

// Reusable scroll function
const scrollToSection = () => {
    const section = document.getElementById("hero");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const Footer = () => {
    return (
        <footer
            style={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "2rem 1rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                flexWrap: "wrap",
                borderTop: "1px solid #e2e8f0",
                fontFamily: "sans-serif",
                overflow: "hidden",
                gap: "2rem",
            }}
        >
            {/* Left Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.5rem",
                    flex: "1 1 300px",
                    minWidth: "250px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                        flexWrap: "wrap",
                    }}
                >
                    <img
                        src="https://i.ibb.co/spKYGMxc/IMG-20250729-WA0049.jpg"
                        alt="Harvest Nexus Logo"
                        width="70"
                        height="70"
                        style={{ borderRadius: "8px", marginRight: "0.75rem" }}
                    />
                    <h1
                        style={{
                            fontSize: "1.3rem",
                            margin: 0,
                            color: "#1f2937",
                            flex: "1 1 auto",
                        }}
                    >
                        Harvest Nexus
                    </h1>
                </div>
                <p
                    style={{
                        fontSize: "0.9rem",
                        color: "#4b5563",
                        lineHeight: "1.6",
                        width: "100%",
                    }}
                >
                    Let's grow prosperity, together. Join 20,000+ farmers and buyers trading directly – fairer deals, fresher harvests, smarter agriculture.
                </p>
                <button
                    style={{
                        backgroundColor: "#44D96B",
                        color: "#fff",
                        padding: "0.5em 1em",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        marginTop: "1rem",
                        width: "fit-content",
                        minWidth: "140px",
                        transition: "background-color 0.3s ease",
                    }}
                    onClick={scrollToSection}
                >
                    Get started ➜
                </button>
                <div
                    style={{
                        marginTop: "1.5rem",
                        display: "flex",
                        gap: "1rem",
                    }}
                >
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="Harvest Nexus LinkedIn" width="20" height="18" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="Harvest Nexus X (Twitter)" width="20" height="20" />
                    </a>
                </div>
            </div>

            {/* Middle Section */}
            <div
                style={{
                    marginBottom: "1.5rem",
                    minWidth: "150px",
                    flex: "1 1 150px",
                }}
            >
                <h3 style={{ color: "#1f2937", marginBottom: "1rem" }}>Navigation</h3>
                <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
                    <li>
                        <a href="#home" style={{ textDecoration: "none", color: "#4b5563", fontSize: "0.9rem" }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" style={{ textDecoration: "none", color: "#4b5563", fontSize: "0.9rem" }}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#services" style={{ textDecoration: "none", color: "#4b5563", fontSize: "0.9rem" }}>
                            Our Services
                        </a>
                    </li>
                </ul>
            </div>

            {/* Right Section */}
            <div
                style={{
                    flex: "1 1 250px",
                    maxWidth: "300px",
                }}
            >
                <h3 style={{ color: "#1f2937", marginBottom: "1rem" }}>Contact</h3>
                <p style={{ fontSize: "0.8rem", color: "#4b5563", margin: "0.5rem 0 2em" }}>
                    <img src={Phone} alt="Harvest Nexus Phone" style={{ width: "1em", height: "1em" }} /> (+234) 80656457524, (+234) 9057304766
                </p>
                <p style={{ fontSize: "0.8rem", color: "#4b5563", margin: "0.5rem 0 2em" }}>
                    <img src={Mail} alt="Harvest Nexus Email" style={{ width: "1em", height: "1em" }} /> harvesthublimited@gmail.com
                </p>
                <p style={{ fontSize: "0.8rem", color: "#4b5563", margin: "0.5rem 0 2em" }}>
                    <img src={Location} alt="Harvest Nexus Address" style={{ width: "1em", height: "1em" }} /> First Registrars and Investors Services, 2, Abebe Village Road, Iganmu, Surulere, Lagos
                </p>
            </div>
        </footer>
    );
};

export default Footer;
