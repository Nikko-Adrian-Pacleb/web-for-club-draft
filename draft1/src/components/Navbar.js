import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between">
      <h1 className="w-full sm:w-3/4">Engineering Club</h1>
      <ul className="flex flex-col sm:flex-row w-full sm:w-1/4 sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2 p-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
