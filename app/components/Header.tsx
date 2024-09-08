import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="text-white p-4 h-header flex flex-row justify-between items-center">
      <Link href="/" className="text-lg font-bold hover:underline">
        Zink Language
      </Link>
      <Link
        href="https://github.com/zink-lang/zink"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <GitHubLogoIcon width={16} height={16} />
      </Link>
    </header>
  );
}
