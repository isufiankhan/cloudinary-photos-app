'use client';

import { CldImage } from "next-cloudinary";
import Heart from "./icons/Heart";
import { setAsFavouriteAction } from "../app/gallery/actions";
import { useTransition } from "react";
import { SearchResults } from "@/app/gallery/page";
import FullHeart from "./icons/FullHeart";

const CloudinaryImage = (props:any & {imageData: SearchResults; path: string}) => {
    const [transition, startTransition] = useTransition();

    const {imageData} = props;

    const isFavorite = imageData.tags.includes("favorite");

    return (
        <div className="relative">
            <CldImage
                {...props}
                src={imageData.public_id}
            />
            {isFavorite ?
            <FullHeart
            onClick={()=>{
                startTransition(() => {
                    setAsFavouriteAction(imageData.public_id, false, props.path)
                });
            }}
            className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer" 
            />
            :
            <Heart
            onClick={()=>{
                startTransition(() => {
                    setAsFavouriteAction(imageData.public_id, true, props.path)
                });
            }}
            className="absolute top-2 right-2 hover:text-red-600 cursor-pointer" 
            />}
        </div>
    )
}

export default CloudinaryImage