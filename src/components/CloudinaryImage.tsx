'use client';

import { CldImage, CldImageProps } from "next-cloudinary";
import Heart from "./icons/Heart";
import { setAsFavouriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResults } from "@/app/gallery/page";
import FullHeart from "./icons/FullHeart";
import { ImageMenu } from "./ImageMenu";

const CloudinaryImage = (
    props:
    {
        imagedata: SearchResults;
        onUnheart?: (unheartedResource: SearchResults) => void
    } & Omit<CldImageProps, "src">
) => {
    const [transition, startTransition] = useTransition();

    const { imagedata, onUnheart } = props;

    const [isFavorited, setIsFavorited] = useState(
        imagedata.tags.includes("favorite")
    );

    return (
        <div className="relative">
            <CldImage
                {...props}
                src={imagedata.public_id}
            />
            {isFavorited ?
                <FullHeart
                    onClick={() => {
                        onUnheart?.(imagedata);
                        setIsFavorited(false);
                        startTransition(() => {
                            setAsFavouriteAction(imagedata.public_id, false)
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-white text-red-600 cursor-pointer"
                />
                :
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => {
                            setAsFavouriteAction(imagedata.public_id, true)
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-red-600 cursor-pointer"
                />}
                <ImageMenu image={imagedata} />
        </div>
    )
}

export default CloudinaryImage