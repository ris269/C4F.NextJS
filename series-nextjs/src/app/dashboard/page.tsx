import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/dashboard/stackoverflow"}>StackOverflow</Link>
        </li>
        <li>
          <a href="/dashboard/facebook">Facebook</a>
        </li>
        <li>
          <a href="/dashboard/youtube">YouTube</a>
        </li>
        <li>
          <Link href={"/dashboard/testhook"}>Test Hooks</Link>
        </li>
      </ul>
    </div>
  );
}
