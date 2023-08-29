"use client";

import AppTable from "@/components/app.table";
import { useEffect } from "react";
import Dashboard from "./dashboard/page";
import useSWR from "swr";
// import useSWRImmutable from 'swr/immutable'

// ...
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(">>> Check data", data);

  return (
    <>
      <Dashboard />
      {!data ? <div>Loading ...</div> : <AppTable blogs={data} />}
    </>
  );
}

// const fetchData = async () => {
//   const res = await fetch("http://localhost:8000/blogs");
//   const data = await res.json();
//   console.log(">>> Check response", data);
// };

// useEffect(() => {
//   fetchData();
// }, []);
