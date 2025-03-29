"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function NextButton({ title, destination }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/${destination}`)}
      className="cursor-pointer"
    >
      {title}
    </Button>
  );
}

export default NextButton;
