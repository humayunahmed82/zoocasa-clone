import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const Quantity = () => {
    const [num, setNum] = useState(0);

    return (
        <div className="flex space-x-3 items-center">
            <button
                className="w-5 h-5 border flex items-center justify-center rounded-full border-solid border-border_color"
                onClick={() => {
                    if (num > 0) {
                        setNum(num - 1);
                    }
                }}
            >
                <RemoveOutlinedIcon className="icon-size-xs text-x" />
            </button>
            <div className="text-sm font-medium">{num}</div>
            <button
                className="w-5 h-5 border flex items-center justify-center rounded-full border-solid border-border_color"
                onClick={() => setNum(num + 1)}
            >
                <AddOutlinedIcon className="icon-size-xs text-x" />
            </button>
        </div>
    );
};

export default Quantity;
