import React, { useState } from "react";
import Banner from "../Components/Banner/Banner";
import FilterModal from "../Components/FilterModal/FilterModal";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Banner
                onClick={() => {
                    setModalOpen(true);
                }}
            />
            <FilterModal
                onClick={() => {
                    setModalOpen(false);
                }}
                onModal={modalOpen}
            />
        </>
    );
};

export default Home;
