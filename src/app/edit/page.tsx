"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({ searchParams: { publicId } }: {
    searchParams: {
        publicId: string;
    }
}) {
    const [transformation, setTransformation] = useState<undefined | "generative-fill" | "blur" | "grayscale" | "pixelate" | "removebg"
    >();

    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    return <div>
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Edit Image</h1>
            </div>
            <div className="flex gap-4">
                <Button variant={"ghost"} onClick={() => setTransformation(undefined)}>
                    Clear All
                </Button>
                <div className="flex flex-col gap-2">
                <Button onClick={() => {
                    setTransformation("generative-fill")
                    setPrompt(pendingPrompt)
                    }}>
                    Generative Fill
                </Button>
                <Input 
                value={pendingPrompt} 
                onChange={(e) =>setPendingPrompt(e.currentTarget.value)} 
                placeholder="Enter Prompt..."
                />
                </div>
                <Button onClick={() => setTransformation("blur")}>
                    Apply Blur
                </Button>
                <Button onClick={() => setTransformation("grayscale")}>
                    Convert to Gray
                </Button>
                <Button onClick={() => setTransformation("pixelate")}>
                    Pixelate
                </Button>
                <Button onClick={() => setTransformation("removebg")}>
                    Remove Background
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <CldImage
                    src={publicId}
                    width={300}
                    height={200}
                    alt="some image"
                />

                {transformation === "generative-fill" &&
                    <CldImage
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="some image"
                        crop="pad"
                        fillBackground={{
                            prompt,
                        }}
                    />
                }

                {transformation === "blur" &&
                    <CldImage
                        src={publicId}
                        width={300}
                        height={200}
                        alt="some image"
                        blur="500"
                    />
                }
                {transformation === "grayscale" &&
                    <CldImage
                        src={publicId}
                        width={300}
                        height={200}
                        alt="some image"
                        grayscale
                    />
                }
                {transformation === "pixelate" &&
                    <CldImage
                        src={publicId}
                        width={300}
                        height={200}
                        alt="some image"
                        pixelate
                    />
                }
                {transformation === "removebg" &&
                    <CldImage
                        src={publicId}
                        width={300}
                        height={200}
                        alt="some image"
                        removeBackground
                    />
                }
            </div>
        </div>
    </div>
}