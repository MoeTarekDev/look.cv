import SignInButton from "@/components/SignInButton";
import { Badge } from "@/components/ui/badge";
export default function page() {
  return (
    <section className="h-screen">
      <div className="profile-container h-full flex flex-col gap-6 items-center justify-center ">
        <div className="  min-w-[282px]  max-w-[381px] flex flex-col items-center gap-8">
          <Badge className="flex items-center gap-4 p-1 px-5 w-fit bg-muted text-foreground text-3xl font-medium hover:bg-muted rounded-full">
            👔 <span>look.cv/</span>
          </Badge>
          <div className="border-gray-100 border-2 rounded-2xl p-5 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-foreground font-medium">
                Login to your account
              </h2>
              <p className="text-sm text-muted-foreground/70 font-normal">
                By continuing you agree to our terms of service and privacy
                policy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <SignInButton provider="google" providerImage="google" />
              <SignInButton provider="github" providerImage="apple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
