import React, { Fragment } from "react";

// Import components
import SearchFrom from "../Components/Search//SearchFrom";
import SearchBar from "../Components/Search/SearchBar";

const RealEstate = (props) => {
    return (
        <main className="mt-[60px] sm:mt-[72px]">
            <Fragment>
                <div className="hidden lg:block">
                    <SearchBar onFilterModal={props.onFilterModal} />
                </div>
                <div className="lg:hidden">
                    <SearchFrom onFilterModal={props.onFilterModal} />
                </div>
            </Fragment>
        </main>
    );
};
export default RealEstate;
