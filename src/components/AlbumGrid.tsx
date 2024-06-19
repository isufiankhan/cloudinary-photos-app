'use client';

import { SearchResults } from "@/app/gallery/page";
import CloudinaryImage from "@/components/CloudinaryImage";
import { ImageGrid } from "@/components/ImageGrid";

const AlbumGrid = ({images}: {images: SearchResults[]}) => {

    return (
                <ImageGrid
                    images={images}
                    getImage={(imagedata: SearchResults) => {
                        return(
                        <CloudinaryImage
                            key={imagedata.public_id}
                            imagedata={imagedata}
                            alt="an image of something"
                            width="400"
                            height="300"
                        />
                    );
                    }}
                />
    )
}

export default AlbumGrid