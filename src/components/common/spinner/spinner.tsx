import React from 'react';

import './spinner.scss';


type TProps = {
    size?: number,
    className?: string
};
const Spinner: React.FC<TProps> = ({
    size = 100,
    className
}) => {
    const borderWidth = Math.floor(size / 8);
    return (
        <div className={("resizable-spinner " + (className || ''))} style={{ width: size, height: size }}>
            <div className="ring" style={{ borderWidth: borderWidth, width: (size - borderWidth * 2), height: (size - borderWidth * 2) }} ></div>
        </div>
    )
}

export default Spinner;