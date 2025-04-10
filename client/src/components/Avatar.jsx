import React from 'react';

const getInitials = (name = "User") => {
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0][0]?.toUpperCase();
    return (names[0][0])?.toUpperCase();
};

const Avatar = ({ src, alt = "User Avatar", size = "w-10 h-10", name = "User", textSize = 'text-sm' }) => {
    return (
        <div
            className={`inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold ${textSize} uppercase border border-gray-300 ${size}`}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => (e.target.style.display = "none")} // hide broken images
                />
            ) : (
                getInitials(name)
            )}
        </div>
    );
};

export default Avatar;