import React from "react";

// Import components
import SelectUi from "../UI/Select/SelectUi";

const ListingsSorted = (props) => {
    return (
        <div className="py-7">
            <div className="container">
                <div className={`${props.className}`}>
                    <h1 className="text-[1.1rem] font-bold mb-2 whitespace-nowrap">
                        1.10K Listings
                    </h1>
                    <SelectUi
                        className="text-sm"
                        options={[
                            {
                                value: "price",
                                label: "Price (Low to High)",
                            },
                            {
                                value: "-price",
                                label: "Price (High to Low)",
                            },
                            {
                                value: "-date",
                                label: "Newest to Oldest",
                            },
                            {
                                value: "date",
                                label: "Oldest to Newest",
                            },
                            {
                                value: "-bedrooms",
                                label: "Bedrooms (High to Low)",
                            },
                            {
                                value: "bedrooms",
                                label: "Bedrooms (Low to High)",
                            },
                            {
                                value: "-bathrooms",
                                label: "Bathrooms (High to Low)",
                            },
                            {
                                value: "bathrooms",
                                label: "Bathrooms (Low to High)",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListingsSorted;
