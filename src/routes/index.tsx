import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/FooterComponent";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/data/images";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="mainContainer my-16">
        <Carousel
          className=" w-full max-w-6xl mx-auto relative my-16"
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
        >
          <CarouselContent>
            {images.map((img) => (
              <CarouselItem
                key={img.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 shrink-0"
              >
                <div className="px-4">
                  <Card className="rounded-3xl border-2  shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#fff8e7] border-2 border-[#7a9e7e] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#e3f0d6]">
            ◀
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#fff8e7] border-2 border-[#7a9e7e] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#e3f0d6]">
            ▶
          </CarouselNext>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
