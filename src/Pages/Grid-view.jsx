import React from "react";

// Import Images
import propertiesImage from "../assets/properties-items.png";

// Import components
import SearchFrom from "../Components/Search/SearchFrom";
import SearchBar from "../Components/Search/SearchBar";
import ListingsSorted from "../Components/ListingsSorted/ListingsSorted";
import PropertiesItems from "../Components/Properties/PropertiesItems";
import Pagination from "../Components/UI/Pagination/Pagination";

const GridView = (props) => {
    return (
        <main className="mt-[60px] lg:mt-[72px]">
            <div className="hidden lg:block">
                <SearchBar
                    MapView="/map-view"
                    onFilterModal={props.onFilterModal}
                />
            </div>
            <div className="lg:hidden shadow-custom">
                <SearchFrom onFilterModal={props.onFilterModal} />
            </div>

            <ListingsSorted className="w-52" />

            <div className="pb-10">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                        <PropertiesItems
                            propertiesImage={propertiesImage}
                            forSale="For Sale"
                            // sold="Sold"
                            price="$628,000"
                            postDate="53 minutes"
                            address="1403 - 17 Dundonald St"
                            bed="1Bed"
                            bath="1Bath"
                            sqft="500-599sqft"
                        />
                    </div>

                    <div className="pt-10">
                        <Pagination />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default GridView;
