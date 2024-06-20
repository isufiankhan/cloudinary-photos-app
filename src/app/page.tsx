'use client'

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';


type UploadResult = {
  info: {
    public_id: string
  },
  event: 'success',
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main>
      <CldUploadButton
      onUpload={(result:any) => {
        setImageId(result.info.public_id)
      }}
      uploadPreset="equutn9r"
       />

      {imageId && (
        <CldImage
        width="300"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      )}
    </main>
  );
}
