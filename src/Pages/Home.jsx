import React, { Fragment } from "react";
import Banner from "../Components/Banner/Banner";
import PopularLink from "../Components/PopularLink/PopularLink";
import PropertiesSection from "../Components/Properties/PropertiesSection";

const Home = (props) => {
    return (
        <Fragment>
            <Banner onFilterModal={props.onFilterModal} />

            <PropertiesSection />

            <PopularLink />
        </Fragment>
    );
};

export default Home;
