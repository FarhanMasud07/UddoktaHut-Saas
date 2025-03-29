import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>⚠️ Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
