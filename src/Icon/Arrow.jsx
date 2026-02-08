import React from "react";

const Arrow = ({ direction }) => {
    if (!direction) {
        return null; // не показываем стрелку, если нет направления
    }
    
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1024 1024" 
            className={`arrow-icon ${direction}`}
            style={{
                width: '16px',
                height: '16px',
                marginLeft: '5px',
                transition: 'transform 0.3s',
                transform: direction === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)',
                opacity: direction === 'asc' || direction === 'desc' ? 1 : 0.3
            }}
        >
            <path 
                fill="#403e3a" 
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35"
            />
        </svg>
    );
};

export default Arrow;