"use client";
import { useEffect } from "react";
import useSWR from "swr";

function fetcher(url: string) {
  return fetch(url).then(res => {
    return res.json();
  })
}

export default function ClientComp(props: any) {
  const swr = useSWR("/apis/test", fetcher)
  console.log(props, swr.data)
  useEffect(() => {
    swr.mutate()
  }, [])
  return (
    <div>
      {JSON.stringify(props)}
      <div>{JSON.stringify(swr.data)}</div>
    </div>
  )
}
