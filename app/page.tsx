import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col h-page max-w-4xl mx-auto p-4 justify-center items-center">
      <section>
        <h1 className="text-4xl font-bold mb-4 text-center">Zink Language</h1>
        <p className="text-lg mb-4 text-center">
          The rustic programming language targets the EVM.
        </p>
      </section>

      <section className="flex space-x-4 mt-6">
        <Link
          href="https://docs.zink-lang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-4 py-2 border border-gray-300 rounded">
            Docs
          </Button>
        </Link>
        <Link href="/budgets">
          <Button className="px-4 py-2 border border-gray-300 rounded">
            Budgets
          </Button>
        </Link>
      </section>
    </main>
  );
}
