import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="hidden md:block font-medium text-white border border-[#E0E0E0] px-5 py-2 rounded-md bg-[#0F4901] hover:bg-black hover:text-[#E0E0E0]">
            {text}
        </button>
    );
}

export default Button;
