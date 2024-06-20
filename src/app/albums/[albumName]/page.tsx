import cloudinary from "cloudinary";
import AlbumGrid from "../../../components/AlbumGrid";
import { SearchResults } from "@/app/gallery/page";
import ForceRefresh from "@/components/ForceRefresh";
import Navbar from "@/components/Navbar";

const page = async ({params : {albumName}} :
    {params : {
        albumName: string;
    }}
) => {
    const results = await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute() as { resources: SearchResults[] };

    return (
        <div>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold capitalize">Album {albumName}</h1>
                </div>
                <AlbumGrid
                images={results.resources}
                />
            </div>
        </div>
    )
}

export default page