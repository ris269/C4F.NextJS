'use client'

import AppSampleTable from "@/components/app.table";
import { useEffect } from "react";
import Dashboard from "./dashboard/page";

export default function Home() {

  const fetchData = async() => {
    const res = await fetch('http://localhost:8000/blogs')
    const data = await res.json()
    console.log('>>> Check response', data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Dashboard />
      <AppSampleTable />
    </>
  );
}
