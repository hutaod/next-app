import Content from "./Content";
import { increment } from "../../../../redux/features/counter/counterSlice"
import { Counter } from "../../../../redux/features/counter/Counter";
import { useStore } from "../../../../redux/server";

async function fetchData() {
  const res = await fetch("http://localhost:3000/apis/posts/detail")
  const resJSON = await res.json();
  return resJSON.data;
}

export default async function Detail() {
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
