import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import projectPlaceHolder from "../../public/50383bce2e5895051c22375888e61ed3.jpg";
import Image from "next/image";
import Link from "next/link";
export default function UserProjectsCarousel() {
  return (
    <div className="flex gap-6 pb-6">
      <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
        <span>2023</span>
      </div>
      <div className="flex flex-col gap-3 w-full">
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
        <Carousel className="w-[500px] overflow-x-auto">
          <CarouselContent className="gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[19.571%]">
                <div className="relative w-[98.44px] h-[98.44px] rounded-xl">
                  <Image
                    sizes="98.44px"
                    priority
                    className="object-cover object-center rounded-xl"
                    fill
                    src={projectPlaceHolder}
                    alt="project placeHolder"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>{" "}
      </div>
    </div>
  );
}
