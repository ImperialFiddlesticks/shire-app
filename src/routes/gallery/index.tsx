import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "../../data/images";

export const Route = createFileRoute("/gallery/")({
  component: Gallery,
});

function Gallery() {
  return (
    <div className="galleryContainer">
      <div className="galleryMasonry">
        {images.map((img) => (
          <Link
            key={img.id}
            to="/gallery/$imageId"
            params={{ imageId: img.id }}
          >
            <img src={img.src} alt={img.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
}
