import Image from "next/image";
import { GalleryData } from "@/data/galleryData";

interface GalleryProps {
  galleryData: GalleryData[];
}

export default function Gallery({ galleryData }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {galleryData.map((gallery, index) => (
        <div key={gallery.image}>
          <Image
            src={gallery.image}
            alt={`Gallery image ${index + 1}`}
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
