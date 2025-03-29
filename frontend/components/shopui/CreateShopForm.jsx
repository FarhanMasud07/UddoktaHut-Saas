"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Loader from "../common/Loader";

export default function CreateShopForm() {
  const [shopName, setShopName] = useState("");
  const [shopURL, setShopURL] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function createShop() {
    setError(null);
    setShopURL(null);
    setLoading(true);

    if (!shopName.trim()) {
      setError("Please enter a shop name.");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/createShop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shopName }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setShopURL(data.shopURL);
  }

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Input
        type="text"
        placeholder="Enter your shop name"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
      />
      <button onClick={createShop} className="cursor-pointer">
        Create My Shop
      </button>
      {isLoading && <Loader />} {/* ✅ Show loader during request */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shopURL && (
        <p style={{ textAlign: "center", padding: "50px", fontSize: "20px" }}>
          ✅ <strong>Your shop is ready!</strong>
          <br />
          <Link href={shopURL} target="_blank" rel="noopener noreferrer">
            {shopURL}
          </Link>
        </p>
      )}
    </div>
  );
}
