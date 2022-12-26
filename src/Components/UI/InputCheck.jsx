import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const InputCheck = (props) => {
    return (
        <div>
            <label
                htmlFor={props.id}
                className="flex items-center relative before:w-[18px] before:h-[18px] before:border before:border-solid before:border-border_color before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-[18px]"
            >
                <input id={props.id} type="checkbox" className="hidden peer" />
                <CheckIcon className="absolute top-0 left-[1px] text-primary icon-size z-[-1] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible" />
                <span className="ml-2 pt-[2px]">{props.title}</span>
            </label>
        </div>
    );
};

export default InputCheck;
