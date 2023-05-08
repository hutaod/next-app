import Content from "./Content";

function fetcher(url: string) {
  return fetch(url).then(res => {
    return res.json().then(res => {
      return res.data;
    });
  })
}

export default async function Home() {
  const res = await fetcher("http://localhost:3000/apis/posts/detail")
  return <Content data={res.data} />
}
