// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center py-8 bg-gray-200">
            <h1 className="text-5xl font-semibold mb-2 text-black mb-5">Get In Touch</h1>
            <p className="text-md max-w-3xl text-center mb-4 text-black">
                I&apos;m currently looking for full-time React Developer/Frontend Developer opportunities! 
                If you know of any positions available, 
                if you have any questions, or if you just want to say hi, 
                please feel free to email me at,<a href="mailto:your-bipinlongjamm@example.com" className="text-black">bipinlongjamm@example.com</a>
            </p>
            <p className="text-lg text-gray-400 text-black">with ❤️ by Bipin Longjam 😊</p>
        </footer>
    );
};

export default Footer;
