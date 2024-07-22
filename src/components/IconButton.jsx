// src/components/IconButton.jsx
import React from 'react';

const IconButton = ({ icon, onClick }) => {
    return (
        <button onClick={onClick} className="text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full">
            {icon}
        </button>
    );
};

export default IconButton;
