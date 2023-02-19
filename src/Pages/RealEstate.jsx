import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

const RealEstate = (props) => {
    return (
        <main className="mt-[72px]">
            <SearchBar onFilterModal={props.onFilterModal} />
        </main>
    );
};
export default RealEstate;
