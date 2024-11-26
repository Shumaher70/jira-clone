import Link from "next/link";
import Image from "next/image";

import { Navigation } from "./navigation";
import { DottedSeparator } from "./dotted-separator";

export const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};