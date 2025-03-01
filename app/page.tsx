import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-page max-w-4xl mx-auto p-4 justify-center items-center">
      <section>
        <h1 className="text-4xl font-bold mb-4 text-center">Zink Language</h1>
        <p className="text-lg mb-4 text-center">
          The rustic programming language targets the EVM.
        </p>
      </section>

      <section className="flex space-x-4 mt-3">
        <Link href="/bounties" className="hover:underline">
          <Button>Join the revolution with rewards 💰</Button>
        </Link>
      </section>

      <section className="flex space-x-4 mt-8 border border-1 px-6 py-4 rounded-lg">
        🦀 We&apos;re hiring, contact&nbsp;
        <Link
          href="https://t.me/clearloop"
          className="hover:underline px-1"
          target="_blank"
        >
          @clearloop
        </Link>
        &nbsp;on Telegram for more information!
      </section>
    </main>
  );
}
