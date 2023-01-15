import React from "react";
import TabView from "../UI/Tab/TabView";
import SearchFrom from "./SearchFrom/SearchFrom";
import bannerImage from "../../assets/banner.jpg";

const Banner = (props) => {
    return (
        <div className="w-full h-screen relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
            <img
                className="w-full h-screen  top-0 left-0 object-cover"
                src={bannerImage}
                alt="/"
            />
            <div className="absolute top-0 z-[2] left-0 w-full h-full flex items-center">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-frank text-white">
                            Find your home with us
                        </h2>
                        <p className="text-white font-normal mt-3">
                            From as low as $10 per day with limited time offer
                            discounts.
                        </p>
                    </div>

                    <div className="mt-12">
                        <TabView
                            tabs={[
                                {
                                    id: 1,
                                    name: "Buy",
                                    content: (
                                        <SearchFrom
                                            onFilterModal={props.onFilterModal}
                                        />
                                    ),
                                },
                                {
                                    id: 2,
                                    name: "Rent",
                                    content: (
                                        <SearchFrom
                                            onFilterModal={props.onFilterModal}
                                        />
                                    ),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
