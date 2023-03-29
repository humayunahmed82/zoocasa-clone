import React from "react";

// Import Images
import propertiesImage from "../assets/properties-items.png";

// Import components
import SearchFrom from "../Components/Search/SearchFrom";
import SearchBar from "../Components/Search/SearchBar";
import ListingsSorted from "../Components/ListingsSorted/ListingsSorted";
import PropertiesItems from "../Components/Properties/PropertiesItems";

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

            <div className="relative h-[calc(100vh_-_159px)]">
                <div className="absolute top-0 left-0 w-80 h-full overflow-hidden shadow-custom bg-white hidden sm:block">
                    <ListingsSorted className="w-52" />

                    <div className="p-4 space-y-4 overflow-auto h-full">
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
                </div>

                <div className="sm:ml-80 h-full">
                    <iframe
                        className="w-full h-full"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    ></iframe>
                </div>
            </div>
        </main>
    );
};

export default MapView;
