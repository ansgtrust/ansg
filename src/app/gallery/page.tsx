import React from "react";
import fs from "fs";
import path from "path";

import GallerySection from "@/components/gallery/GallerySection";

const Gallery = () => {
  const dir = path.join(process.cwd(), "public/images/gallery");
  const galleryFiles = fs.readdirSync(dir);

  const onlyImagesVideos = galleryFiles.filter(
    (item) =>
      item.includes(".jpeg") || item.includes(".jpg") || item.includes(".png"),
  );

  return <GallerySection galleryImages={onlyImagesVideos} />;
};

export default Gallery;
