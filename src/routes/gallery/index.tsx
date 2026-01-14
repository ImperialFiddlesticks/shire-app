import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "../../data/images";
import { Footer } from "../../components/FooterComponent";

export const Route = createFileRoute("/gallery/")({
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <div className="galleryContainer">
        <h2 className="galleryHeadline">Gallery</h2>
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
      <Footer />
    </>
  );
}
