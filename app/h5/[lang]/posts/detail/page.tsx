import Content from "./Content";
import { increment } from "../../../store/features/counter/counterSlice"
import { Counter } from "@/app/h5/store/features/counter/Counter";
import { useStore } from "@/app/h5/store/tools";

async function fetchData() {
  const res = await fetch("http://localhost:3000/apis/posts/detail")
  const resJSON = await res.json();
  return resJSON.data;
}

export default async function Home() {
  const { dispatch } = useStore();
  const res = await fetchData()
  dispatch(increment())
  return (
    <>
      <Content data={res.data} />
      <Counter />
    </>
  )
}
