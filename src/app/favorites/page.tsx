import CloudinaryImage from "@/components/CloudinaryImage";
import cloudinary from "cloudinary";
import { SearchResults } from "../gallery/page";
import ForceRefresh from "@/components/ForceRefresh";

const FavoritesPage = async () => {
    const results = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute() as {resources: SearchResults[]};

        console.log(results)

    return (
        <div>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Favorites</h1>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result) => (
                        <CloudinaryImage
                        path="/favorites"
                        key={result.public_id}
                        imageData={result}
                        alt="an image of something"
                        width="400"
                        height="300"
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage