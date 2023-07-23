import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center w-full h-full mt-20">
      <SignIn />
    </main>
  );
}
