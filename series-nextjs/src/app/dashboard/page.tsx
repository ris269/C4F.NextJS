import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/test.module.css";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/dashboard/stackoverflow"}>
            StackOverflow
            {/* <span className={y['red']}>StackOverflow</span> */}
          </Link>
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
