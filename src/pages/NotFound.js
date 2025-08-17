import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/";
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                fontFamily: "'Roboto', Arial, sans-serif",
                backgroundColor: "#333",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                margin: 0,
                textAlign: "center",
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            {/* Logo */}
            <img
                src="https://roeinizri.com/roeinizri-192x192.png"
                alt="Roei Nizri Logo"
                style={{ maxWidth: "150px", marginBottom: "20px" }}
            />

            <h1 style={{ fontSize: "2em", marginBottom: "16px" }}>Page Not Found</h1>
            <p style={{ fontSize: "1.2em" }}>
                Oops! The page you`&apos;re looking for doesn`&apos;t exist. You`&apos;ll be redirected to
                the homepage in 5 seconds.
            </p>

            <Link
                to="/"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    fontSize: "1em",
                    color: "white",
                    backgroundColor: "#007bff",
                    border: "none",
                    borderRadius: "4px",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "20px",
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0056b3";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#007bff";
                }}
            >
                Go to Homepage
            </Link>

        </div>
    );
}
