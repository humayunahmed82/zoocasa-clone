import React from "react";
import Banner from "../Components/Banner/Banner";
import PopularLink from "../Components/PopularLink/PopularLink";
import PropertiesSection from "../Components/Properties/PropertiesSection";

const Home = (props) => {
    return (
        <>
            <Banner onFilterModal={props.onFilterModal} />

            <PropertiesSection />

            <PopularLink />
        </>
    );
};

export default Home;
