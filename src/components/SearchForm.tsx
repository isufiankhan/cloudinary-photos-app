"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SearchForm = ({initialSearch} : {initialSearch: string}) => {
    const [tagName, setTagName] = useState(initialSearch ?? "");
    const router = useRouter();

    useEffect(() => {
        setTagName(initialSearch);
    }, [initialSearch])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
            router.refresh();
        }}>
            {/* <Label htmlFor="tag-name" className="text-right">
                Search By Tag
            </Label> */}
            <div className="flex gap-2">
                <Input
                    onChange={(e) => setTagName(e.currentTarget.value)}
                    id="tag-name"
                    value={tagName}
                    placeholder="Search by tag..."
                />
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}

export default SearchForm