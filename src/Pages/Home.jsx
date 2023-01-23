import React from "react";
import Banner from "../Components/Banner/Banner";
import PropertiesSection from "../Components/PropertiesSection/PropertiesSection";

const Home = (props) => {
    return (
        <>
            <Banner onFilterModal={props.onFilterModal} />

            <PropertiesSection />
        </>
    );
};

export default Home;
