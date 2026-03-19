"use client";

import {  useQuery } from "@tanstack/react-query";

import {  useTRPC } from "@/trpc/client";
import { text } from "stream/consumers";

const Page = () =>{
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({text: "john"}));

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Page;