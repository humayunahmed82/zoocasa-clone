import React from "react";
import Banner from "../Components/Banner/Banner";

const Home = (props) => {
    return (
        <>
            <Banner onFilterModal={props.onFilterModal} />
        </>
    );
};

export default Home;
