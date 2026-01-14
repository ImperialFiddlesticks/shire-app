import { createFileRoute, Link } from "@tanstack/react-router";

const imageMap: Record<string, { src: string; alt: string }> = {
  argonath: {
    src: "/argonath.jpg",
    alt: "Argonath",
  },
  "entrance-to-moria-alan-lee": {
    src: "/entrancetomoriaalanlee.jpg",
    alt: "Entrance to Moria by Alan Lee",
  },
  "grey-havens": {
    src: "/greyhaven.jpg",
    alt: "Grey Havens",
  },
  "gates-of-mordor-alan-lee": {
    src: "/gatesofmordoralanlee.jpeg",
    alt: "The Gates of Mordor by Alan Lee",
  },
  "minas-tirith": {
    src: "/minastirith.jpg",
    alt: "Minas Tirith",
  },
  "the-shire-alan-lee": {
    src: "/theshirealanlee.jpg",
    alt: "The Shire by Alan Lee",
  },
  hobbiton: {
    src: "/hobbiton.jpg",
    alt: "Hobbiton",
  },
  "mirror-of-galadriel-alan-lee": {
    src: "/mirrorofgaladrielalanlee.jpg",
    alt: "Mirror of Galadriel by Alan Lee",
  },
  lothlorien: {
    src: "/lothlorien.jpg",
    alt: "Lothlorien",
  },
  rivendell: {
    src: "/rivendell.jpg",
    alt: "Rivendell",
  },
  "nazgul-alan-lee": {
    src: "/nazgulalanlee.jpg",
    alt: "Nazgul by Alan Lee",
  },
  "helms-deep": {
    src: "/helmsdeep.png",
    alt: "Helm's Deep",
  },
  "gandalf-and-bilbo-alan-lee": {
    src: "/gandalfandbilboalanlee.jpg",
    alt: "Gandalf and Bilbo by Alan Lee",
  },
};

export const Route = createFileRoute("/gallery/$imageId")({
  component: ImagePage,
});

function ImagePage() {
  const { imageId } = Route.useParams();
  const image = imageMap[imageId];

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div className="imagePageContainer">
      <Link className="backLink" to="/gallery">
        Back to Gallery
      </Link>
      <div className="imageWrapper">
        <img src={image.src} alt={image.alt} className="fullImage" />
      </div>
    </div>
  );
}
