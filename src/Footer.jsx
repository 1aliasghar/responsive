import React from "react";

const Footer = () => {
    return (
        <>
        <footer className="bg-light mt-4 text-center">
            <p>
                © {new Date().getFullYear()} Falcon IT | All Rights Reserved | Terms & Conditions.
            </p>
        </footer>
        </>
    );
};

export default Footer;
