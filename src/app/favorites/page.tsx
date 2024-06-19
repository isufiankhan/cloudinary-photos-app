import cloudinary from "cloudinary";
import { SearchResults } from "../gallery/page";
import ForceRefresh from "@/components/ForceRefresh";
import FavoritesList from "./favorites-list";

const FavoritesPage = async () => {
    const results = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute() as {resources: SearchResults[]};

    return (
        <div>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Favorites</h1>
                </div>
                <FavoritesList 
                initialResources={results.resources}
                />
            </div>
        </div>
    )
}

export default FavoritesPage