import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>This is a home page</h1>
      <Link href={`/about`}>about</Link>
    </div>
  )
}