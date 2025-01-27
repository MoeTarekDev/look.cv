import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserProjectsCarousel from "@/components/UserProjectsCarousel";
import Link from "next/link";
import arrowUpRight from "../../../icons/arrow-up-right.svg";
import Image from "next/image";
import UserProfilePopover from "@/components/UserProfilePopover";
export default function page() {
  return (
    <div className="relative">
      <UserProfilePopover />
      <div className="profile-container flex flex-col gap-6 overflow-hidden">
        <section className="flex flex-col gap-7">
          <div className="flex items-center gap-5">
            <div>
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://s3-alpha-sig.figma.com/img/d253/2a38/d58675cf1bca4699bd9ee5dc0a3cc53c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JoCM2bHzONdoB4ozctpXnwVGEUBQ-gfkdL1xVRCb246k-RbXCqxhblD-cpnzxh67rLJIXP24bLGL3ET1Zrg54MIJCkPvGv6daahYLP03Bn8KIqaqzEfRiSpjW-mt432K7SZeuqz4Wh2ZSTmCZJAcuytO3vZ~VHm3rz4Yw7uIwaoJm6kydPXqTurE-gx4Oc1TzvAoPp5kOLnaLHn~Ph2KESk203dcnZeoXsS4ulm-W1CXVo8c4U-vVPGyZ3F36MTkwdARzKS4AcJWR1MORn1jly6MLjsP9HMsL-QK5Zf9WeDZG~jKFkivALJfbq2jCJtuWIlz3lLbiJtwcze6ORXIpA__"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-[18px] text-foreground">
                Khaled Ali
              </h2>
              <p className="text-muted-foreground/70 text-[14px] font-medium text-sm">
                Product designer
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-foreground">
              Currently, I'm a designer at Vercel where I translate complex
              technical concepts into simple user experiences. Before that, I
              was the second designer at Graphite.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-semibold text-sm leading-6">Experience</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
              <span>2024</span>
              <span>-</span>
              <span>now</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="group text-sm text-foreground font-medium">
                <Link
                  className="group-hover:underline transition-all duration-100"
                  target="_blank"
                  href="https://vercel.com/"
                >
                  Vercel
                </Link>
              </div>
              <div className="text-muted-foreground text-sm font-normal flex items-center">
                <span>Zürich</span>
                <span className="small-ball-divider"></span>
                <span>Remote</span>
              </div>
              <div className="text-sm font-normal">
                <p>Designing & building tools for the Frontend Cloud.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
              <span>2024</span>
              <span>-</span>
              <span>now</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group text-sm text-foreground font-medium">
                <Link
                  className="group-hover:underline transition-all duration-100"
                  target="_blank"
                  href="https://vercel.com/"
                >
                  Graphite
                </Link>
              </div>
              <div className="text-muted-foreground text-sm font-normal flex items-center">
                <span>Zürich</span>
                <span className="small-ball-divider"></span>
                <span>Remote</span>
              </div>
              <div className="text-sm font-normal">
                <p>
                  Designing & building tools foHelped design, build, and launch
                  Graphite's web app, CLI and VS Code extension out of Beta. Led
                  design initiatives across all product and marketing sur the
                  Frontend Cloud.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
              <span>2022</span>
              <span>-</span>
              <span>2023</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="group text-sm text-foreground font-medium">
                <Link
                  className="group-hover:underline transition-all duration-100"
                  target="_blank"
                  href="https://vercel.com/"
                >
                  Github
                </Link>
              </div>
              <div className="text-muted-foreground text-sm font-normal flex items-center">
                <span>Zürich</span>
                <span className="small-ball-divider"></span>
                <span>Remote</span>
              </div>
              <div className="text-sm font-normal">
                <p>
                  Was a Product Designer on the Pull Requests team. Most
                  notably, helped ship GitHub's Merge Queue.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-semibold text-sm leading-6">Education</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
              <span>2018</span>
              <span>-</span>
              <span>2022</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="group text-sm text-foreground font-medium">
                <Link
                  className="group-hover:underline transition-all duration-100"
                  target="_blank"
                  href="https://vercel.com/"
                >
                  University of Design
                </Link>
              </div>
              <div className="text-muted-foreground text-sm font-normal flex items-center">
                <span>Aswan</span>
              </div>
              <div className="text-sm font-normal">
                <p>Bachelor's Degree in Interaction Design.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-semibold text-sm leading-6">Projects</h3>
          <div className="flex flex-col gap-6">
            <UserProjectsCarousel />
            <UserProjectsCarousel />
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-semibold text-sm leading-6">Certifications</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-1 self-start flex-nowrap text-muted-foreground text-sm min-w-[90px]">
              <span>2022</span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="group text-sm text-foreground font-medium">
                <Link
                  className="group-hover:underline transition-all duration-100"
                  target="_blank"
                  href="https://vercel.com/"
                >
                  Certification A
                </Link>
              </div>
              <div className="text-muted-foreground text-sm font-normal flex items-center">
                <span>Certified Scrum Product Owner (CSPO).</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="font-semibold text-sm leading-6">Lets get in touch</h3>
          <div className="flex items-center gap-6">
            <div className="group flex items-center gap-1">
              <Link
                target="_blank"
                className="group-hover:underline transition-all duration-100 text-sm text-foreground font-normal"
                href="https://x.com/"
              >
                Twitter
              </Link>
              <Image
                src={arrowUpRight}
                alt="arrow up right icon"
                className="w-5 h-5"
              />
            </div>
            <div className="group flex items-center gap-1">
              <Link
                target="_blank"
                className="group-hover:underline transition-all duration-100 text-sm text-foreground font-normal"
                href="https://linkedin.com/"
              >
                Linkedin
              </Link>
              <Image
                src={arrowUpRight}
                alt="arrow up right icon"
                className="w-5 h-5"
              />
            </div>
            <div className="group flex items-center gap-1">
              <Link
                target="_blank"
                className="group-hover:underline transition-all duration-100 text-sm text-foreground font-normal"
                href="https://github.com/"
              >
                Github
              </Link>
              <Image
                src={arrowUpRight}
                alt="arrow up right icon"
                className="w-5 h-5"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
