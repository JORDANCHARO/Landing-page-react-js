
import React from 'react';

export default function Button({ children, theme, className, href }) {
    // Base class for styling
    const baseClass = "text hover:text-white";

    // Conditional classes based on theme
    const themeClass = theme === "primary"
        ? "bg-p-3 hover:bg-p-2"
        : theme === "secondary"
            ? "bg-n-7 hover:bg-n-p-3"
            : "";

    // Render Button element
    const renderButton = () => {
        return (
            <button className={`px-3 py-3 rounded-lg button lg:py-4 lg:px-6 ${themeClass} ${baseClass} ${className}`}>
                {children}
            </button>
        );
    };

    // Render Link element
    const renderLink = () => {
        return (
            <a href={href} className={`button inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline ${themeClass} ${baseClass} ${className}`}>
                {children}
            </a>
        );
    };

    // Return button or link based on the presence of href
    return href ? renderLink() : renderButton();
}
