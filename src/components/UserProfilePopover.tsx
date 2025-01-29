import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import editIcon from "../../icons/edit.svg";
import settingsIcon from "../../icons/settings.svg";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
export default function UserProfilePopover() {
  return (
    <div className="fixed bottom-6 left-6">
      <Popover>
        <PopoverTrigger>
          <Avatar className="w-11 h-11">
            <AvatarImage
              src="https://s3-alpha-sig.figma.com/img/d253/2a38/d58675cf1bca4699bd9ee5dc0a3cc53c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JoCM2bHzONdoB4ozctpXnwVGEUBQ-gfkdL1xVRCb246k-RbXCqxhblD-cpnzxh67rLJIXP24bLGL3ET1Zrg54MIJCkPvGv6daahYLP03Bn8KIqaqzEfRiSpjW-mt432K7SZeuqz4Wh2ZSTmCZJAcuytO3vZ~VHm3rz4Yw7uIwaoJm6kydPXqTurE-gx4Oc1TzvAoPp5kOLnaLHn~Ph2KESk203dcnZeoXsS4ulm-W1CXVo8c4U-vVPGyZ3F36MTkwdARzKS4AcJWR1MORn1jly6MLjsP9HMsL-QK5Zf9WeDZG~jKFkivALJfbq2jCJtuWIlz3lLbiJtwcze6ORXIpA__"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col divide-y-[0.1px] divide-gray-200/50 p-0">
          <div className="flex items-center gap-2 p-3">
            <div>
              <Avatar className="w-11 h-11">
                <AvatarImage
                  src="https://s3-alpha-sig.figma.com/img/d253/2a38/d58675cf1bca4699bd9ee5dc0a3cc53c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JoCM2bHzONdoB4ozctpXnwVGEUBQ-gfkdL1xVRCb246k-RbXCqxhblD-cpnzxh67rLJIXP24bLGL3ET1Zrg54MIJCkPvGv6daahYLP03Bn8KIqaqzEfRiSpjW-mt432K7SZeuqz4Wh2ZSTmCZJAcuytO3vZ~VHm3rz4Yw7uIwaoJm6kydPXqTurE-gx4Oc1TzvAoPp5kOLnaLHn~Ph2KESk203dcnZeoXsS4ulm-W1CXVo8c4U-vVPGyZ3F36MTkwdARzKS4AcJWR1MORn1jly6MLjsP9HMsL-QK5Zf9WeDZG~jKFkivALJfbq2jCJtuWIlz3lLbiJtwcze6ORXIpA__"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-normal text-foreground">
                Khaled Ali
              </span>
              <span className="text-xs text-muted-foreground/70">
                kh@email.com
              </span>
            </div>
          </div>
          <div className="py-2">
            <div className="flex items-center gap-1 hover:bg-muted/50 py-1 px-3 cursor-pointer">
              <Image src={editIcon} alt="Edit icon" className="w-6 h-6" />
              <span className="text-sm font-normal">Edit CV</span>
            </div>
            <div className="flex items-center gap-1 hover:bg-muted/50 py-1 px-3 cursor-pointer">
              <Image src={settingsIcon} alt="Edit icon" className="w-6 h-6" />
              <span className="text-sm font-normal">Settings</span>
            </div>
          </div>

          <LogoutButton />
        </PopoverContent>
      </Popover>
    </div>
  );
}
