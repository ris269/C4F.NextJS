'use client'
import TestHook from "./test-hooks";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
        <>
            <h1>Hello, Dashboard Page!</h1>
            <TestHook />
        </>
    )
}