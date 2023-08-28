// 'use client'

import React from "react";
import TestHookComponent from "./test-hooks";

type Props = {};

export default function TestHook({}: Props) {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <TestHookComponent />
    </>
  );
}
