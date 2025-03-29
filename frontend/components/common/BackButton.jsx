"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function BackButton({ title }) {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className="cursor-pointer">
      {title}
    </Button>
  );
}

export default BackButton;
