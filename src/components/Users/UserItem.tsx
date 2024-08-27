import React from "react"

export type UserProps = {
  user: {
    id: number | string,
    name: string,
    email: string,
    style: React.CSSProperties,
    histories: {
      id: number | string,
      name: string,
      status: boolean
    }[]
  },
}

export default function UserItem({user}: UserProps) {
  return (
    <div key={user.id} style={user.style}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {
        user.histories.map((history) => {
          return <p key={history.id}>{history.name}</p>
        })
      }
    </div>
  )
}
