"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import projectPlaceHolder from "../../public/50383bce2e5895051c22375888e61ed3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function UserProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback((api) => {
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!api) return;

    onScroll(api);
    api
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [api, onScroll]);
  return (
    <div className="flex gap-6 pb-6 ">
      <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
        <span>2023</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="group text-sm text-foreground font-medium">
          <Link
            className="group-hover:underline transition-all duration-100"
            target="_blank"
            href="https://vercel.com/"
          >
            Project B
          </Link>
        </div>
        <div className="text-muted-foreground text-sm font-normal flex items-center">
          <span>Project C</span>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent className="-ml-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[27.571%] pl-1">
                <Image
                  priority
                  className="object-cover w-[98.44px] h-[98.44px] object-center rounded-xl cursor-grab"
                  src={projectPlaceHolder}
                  alt="project placeHolder"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
