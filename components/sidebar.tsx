import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col bg-white",
      className,
    )}>
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-1">
          <Image src="/(Icons & modals)/logodazaga.png" height={50} width={50} alt="Logo" />
          <h1 className="text-2xl font-extrabold text-red-600 tracking-wide">
            Dazagara
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Learn" 
          href="/learn"
          iconSrc="/hut.png"
        />
        <SidebarItem 
          label="Leaderboard" 
          href="/leaderboard"
          iconSrc="/(Icons & modals)/leaderboard.png"
        />
        <SidebarItem 
          label="quests" 
          href="/quests"
          iconSrc="/(Icons & modals)/quests.png"
        />
        <SidebarItem 
          label="shop" 
          href="/shop"
          iconSrc="/(Icons & modals)/handbag.png"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
