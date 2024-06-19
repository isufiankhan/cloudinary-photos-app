'use client';

import { SearchResults } from "@/app/gallery/page";
import CloudinaryImage from "@/components/CloudinaryImage";
import { ImageGrid } from "@/components/ImageGrid";

const GalleryGrid = ({images}: {images: SearchResults[]}) => {

    return (
                <ImageGrid
                    images={images}
                    getImage={(imageData: SearchResults) => {
                        return(
                        <CloudinaryImage
                            key={imageData.public_id}
                            imageData={imageData}
                            alt="an image of something"
                            width="400"
                            height="300"
                        />
                    );
                    }}
                />
    )
}

export default GalleryGrid