import React from 'react';
import './Button.scss';

type TButtonProps = {
    bgColor: string;
    color: string;
    text: string;
};

const Button: React.FC<TButtonProps> = ({ bgColor, color, text }: TButtonProps) => {
    return (
        <button className={`Btn`} style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            {text}
        </button>
    );
};

export default Button;
