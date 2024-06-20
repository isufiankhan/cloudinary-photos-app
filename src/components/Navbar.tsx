import { RiGalleryView2 } from "react-icons/ri"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = () => {
    return (
        <div>
            <div className="border-b">
                <div className="flex h-16 max-h-16 items-center px-4 container mx-auto">
                    <RiGalleryView2 className="text-2xl" />
                    <div className="text-xl font-medium pl-2">GallerySync</div>
                    <div className="ml-auto flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar