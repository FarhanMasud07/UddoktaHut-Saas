// import { Suspense } from "react";
// import CreateShopForm from "@/components/shopui/CreateShopForm";
// import Loader from "@/components/common/Loader";
// import { ModeToggle } from "@/components/common/ModeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center px-52 py-52">
      <section className="flex justify-between">
        <h1 className="">Welcome to Uddoktahut</h1>
      </section>
      {/* <Suspense fallback={<Loader />}>
        <CreateShopForm />
      </Suspense> */}
      <Link href="/signup">
        Sign Up
      </Link>
    </main>
  );
}
