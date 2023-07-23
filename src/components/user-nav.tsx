import { UserButton } from "@clerk/nextjs";

export function UserNav() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
