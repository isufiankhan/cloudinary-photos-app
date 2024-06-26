'use client';

import CloudinaryImage from "@/components/CloudinaryImage";
import { SearchResults } from "../gallery/page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/ImageGrid";

const FavoritesList = ({ initialResources }: { initialResources: SearchResults[] }) => {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
        <ImageGrid
            images={resources}
            getImage={(imagedata: SearchResults) => {
                return (
                    <CloudinaryImage
                        key={imagedata.public_id}
                        imagedata={imagedata}
                        alt="an image of something"
                        width="400"
                        height="300"
                        onUnheart={(unheartedResource) => {
                            setResources((currentResources) =>
                                currentResources.filter(
                                    (resource) =>
                                        resource.public_id !== unheartedResource.public_id
                                )
                            )
                        }}
                    />
                );
            }}
        />
    )
}

export default FavoritesList