"use client";
import { signOutAction, updateUserInfo } from "@/app/_lib/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import wrap from "../../icons/Wrap.svg";
import { useRouter } from "next/navigation";
interface RegistrationFormProps {
  allUserNames: { userName: string }[];
}
export default function RegistrationForm({
  allUserNames,
}: RegistrationFormProps) {
  const router = useRouter();
  const formSchema = z.object({
    userName: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(10, "Username must be at most 10 characters.")
      .refine(
        (value) =>
          !allUserNames.some(
            (user: { userName: string }) => user.userName === value
          ),
        {
          message: "This username is already taken.",
        }
      ),
    fullName: z
      .string()
      .min(3, "Display name must be at least 3 characters.")
      .max(25, "Display name must be at most 25 characters."),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      fullName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Submitting form with values:", values);
      const updatedUserName = await updateUserInfo(values);
      console.log("Updated username received:", updatedUserName);

      if (updatedUserName) {
        form.reset();
        console.log("Redirecting to:", `/${updatedUserName}`);
        router.push(`/${updatedUserName}`);
      }
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">
                Username
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className={`text-sm ${
                      form.formState.errors.userName
                        ? "border-red-500  focus-visible:border-0"
                        : ""
                    }`}
                    placeholder="your unique @username"
                    type="text"
                    {...field}
                  />
                  {field.value && !form.formState.errors.userName && (
                    <Image
                      alt="check icon"
                      className="absolute top-1/2 -translate-y-1/2 right-1 bg-background"
                      src={wrap}
                    />
                  )}
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">
                Display name
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className={`text-sm ${
                      form.formState.errors.fullName
                        ? "border-red-500  focus-visible:border-0"
                        : ""
                    }`}
                    placeholder="The name on your profile"
                    type="text"
                    {...field}
                  />
                  {field.value && !form.formState.errors.fullName && (
                    <Image
                      alt="check icon"
                      className="absolute top-1/2 -translate-y-1/2 right-1 bg-background"
                      src={wrap}
                    />
                  )}
                </div>
              </FormControl>
              <FormDescription>Max 15 Characters</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center self-end gap-3  mt-5">
          <LogoutButton />
          <Button
            className={`text-xs rounded-lg p-0 px-3 ${
              form.formState.isSubmitting && "bg-primary/90"
            }`}
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting ? "Submitting" : "Continue"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOutAction();
      }}
      type="button"
      className="cursor-pointer text-sm font-medium text-foreground hover:text-foreground/80 transition-all duration-200"
    >
      Log in with different email
    </button>
  );
}
