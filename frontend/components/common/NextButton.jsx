"use client";

import Link from "next/link";

function NextButton({ title, destination }) {
  return (
    <Link
      href={`/${destination}`}
      className="cursor-pointer"
    >
      {title}
    </Link>
  );
}

export default NextButton;
