'use client'

import React from "react";
import TestHookComponent from "./test-hooks";
import { useFetch } from "./useFetch";
type Props = {};

export default function TestHook({}: Props) {
  const { data } = useFetch({
    url: "/jack.json",
  });


  console.log("TestHook App rendering...");
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <TestHookComponent />
      <div className="m-2 bg-red-300"> Hooks demo</div>
      <div>{JSON.stringify(data)}</div>

    </>
  );
}
