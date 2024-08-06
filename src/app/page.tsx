import Image from "next/image";
import Greet from "./greet";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet />
    </main>
  );
}
