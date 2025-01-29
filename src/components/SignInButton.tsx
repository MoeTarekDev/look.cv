import Image from "next/image";
import googleIcon from "../../icons/google.svg";
import appleIcon from "../../icons/apple.svg";
import {
  signInToGithubAction,
  signInToGoogleAction,
} from "../app/_lib/actions";
export default function SignInButton({
  provider,
  providerImage,
}: {
  provider: string;
  providerImage: string;
}) {
  if (providerImage === "google")
    return (
      <form action={signInToGoogleAction}>
        <button className="flex active:bg-muted  w-full items-center justify-center gap-2 rounded-lg border-2 shadow-sm cursor-pointer border-gray-100 p-2">
          <Image src={googleIcon} alt={`${provider} icon}`} />
          <span className="text-sm font-medium capitalize">
            Continue with {provider}
          </span>
        </button>
      </form>
    );
  else {
    return (
      <form action={signInToGithubAction}>
        <button className="flex w-full active:bg-muted  items-center justify-center gap-2 rounded-lg border-2 shadow-sm cursor-pointer border-gray-100 p-2">
          <Image src={appleIcon} alt={`${provider} icon}`} />
          <span className="text-sm font-medium capitalize">
            Continue with {provider}
          </span>
        </button>
      </form>
    );
  }
}
