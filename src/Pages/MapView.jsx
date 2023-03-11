import React from "react";

// Import Images
// import propertiesImage from "../assets/properties-items.png";

// Import components
import SearchFrom from "../Components/Search/SearchFrom";
import SearchBar from "../Components/Search/SearchBar";

const MapView = (props) => {
    return (
        <main className="mt-[60px] lg:mt-[72px]">
            <div className="hidden lg:block">
                <SearchBar
                    GridView="/grid-view"
                    onFilterModal={props.onFilterModal}
                />
            </div>
            <div className="lg:hidden shadow-custom">
                <SearchFrom onFilterModal={props.onFilterModal} />
            </div>
        </main>
    );
};

export default MapView;
