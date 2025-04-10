import React from 'react';

const Container = ({ children, full = false, className = "" }) => {
    if (full) return <div className={className}>{children}</div>;

    return (
        <div>
            <div className={`container mx-auto px-4 md:px-12 lg:px-24 max-w-screen-xl ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Container;