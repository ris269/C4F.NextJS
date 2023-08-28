import Image from "next/image";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import AppSampleTable from "@/components/app.table";

export default function Home() {
  return (
    <>
      {/* <Dashboard /> */}
      <AppSampleTable />
    </>
  );
}
