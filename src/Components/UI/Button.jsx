import React from "react";

const Button = (props) => {
    return (
        <button
            className={`h-10 md:h-12 px-8  border border-solid text-base font-medium transition_custom ${props.className}`}
            onClick={props.onClick}
            type={props.type || "button"}
        >
            {props.children}
        </button>
    );
};

export default Button;
