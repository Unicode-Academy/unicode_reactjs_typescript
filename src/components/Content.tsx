import { useState } from "react"

interface ContentProps {
    name: string,
    email: string
    status: "active" | "inactive"
}
export default function Content({name, email, status}: ContentProps) {
    const [title, seTitle] = useState<string|null>('Học React không khó');
    const handleClick = () => {
        seTitle('Học React quá khó')
    }
  return (
    <div>
        <h1>{title}</h1>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Status: {status}</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
