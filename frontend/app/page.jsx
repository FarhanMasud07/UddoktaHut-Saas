import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center px-52 py-52">
      <section className="flex justify-between">
        <h1 className="">Welcome to Uddoktahut</h1>
      </section>
      <Link href="/signup">
        Sign Up
      </Link>
    </main>
  );
}
