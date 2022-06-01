import React from "react";
import ArtistCard from "./ArtistCard";

const HorizontalScroll = ({cards}) => {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="mt-5">Bootstrap 4 Horizontal Scrolling</h1>
                <p className="subtitle">
                    Horizontal scrolling without CSS. Just copy scrolling wrapper classes
                </p>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">             
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
            </div>
        </div>
        </div>
    )
}

export default HorizontalScroll;