import Link from "next/link";
import { GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import { FaTelegramPlane } from "react-icons/fa";

export default function Header() {
  return (
    <header className="text-white p-4 h-header flex flex-row justify-between items-center">
      <Link href="/" className="text-lg font-bold hover:underline">
        Zink Language
      </Link>
      <div className="flex space-x-4">
        <Link
          href="https://docs.zink-lang.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <ReaderIcon width={16} height={16} />
        </Link>
        <Link
          href="https://github.com/zink-lang/zink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <GitHubLogoIcon width={16} height={16} />
        </Link>
        <Link
          href="https://t.me/zinklang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaTelegramPlane width={16} height={16} />
        </Link>
      </div>
    </header>
  );
}
