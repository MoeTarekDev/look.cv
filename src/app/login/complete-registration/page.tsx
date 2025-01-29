import { getAllUserNames } from "@/app/_lib/data-service";
import RegistrationForm from "@/components/RegistrationForm";
import { Badge } from "@/components/ui/badge";

export default async function page() {
  const allUserNames = await getAllUserNames();

  return (
    <section className="h-screen">
      <div className="profile-container h-full flex flex-col gap-6 items-center justify-center ">
        <div className="min-w-[282px]  max-w-[381px] flex flex-col items-center gap-8">
          <Badge className="flex items-center gap-4 p-1 px-5 w-fit bg-muted text-foreground text-3xl font-medium hover:bg-muted rounded-full">
            👔 <span>look.cv/</span>
          </Badge>
          <div className="border-gray-100 border-2 rounded-2xl p-5 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-foreground font-medium">
                Welcome to CV
              </h2>
              <p className="text-sm text-muted-foreground/70 font-normal">
                We just need a few details to finish creating your account. You
                can always change this later.
              </p>
            </div>
            <RegistrationForm allUserNames={allUserNames} />
          </div>
        </div>
      </div>
    </section>
  );
}
