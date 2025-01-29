import { signOutAction } from "@/app/_lib/actions";
import Image from "next/image";
import logoutIcon from "../../icons/log-out.svg";

export default function LogoutButton() {
  return (
    <form className="py-1" action={signOutAction}>
      <button className="flex w-full items-center gap-1 hover:bg-muted/50 py-1  px-3 cursor-pointer">
        <Image src={logoutIcon} alt="Edit icon" className="w-6 h-6" />
        <span className="text-sm font-normal">Log out</span>
      </button>
    </form>
  );
}
