import { useLoaderData } from "react-router-dom"
import Nav from "./Nav"

export const User = () => {
    const users=useLoaderData()
  return (
    <>
    <Nav/>
    <div>User:{users.length}</div>
    {users.map(data=>(<p key={data.id}>{data.name}</p>))}

    </>
  )
}
