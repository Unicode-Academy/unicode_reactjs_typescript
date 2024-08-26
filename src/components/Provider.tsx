import React from "react"

type ProviderProps = {
    children: React.ReactNode,
    style: React.CSSProperties,
    heading: React.JSX.Element,
    onChange: React.FormEventHandler<HTMLInputElement>
}
export default function Provider({children, style, heading, onChange}: ProviderProps) {
  return (
    <div style={style}>
        {heading}
        {children}
        <input type="text" onChange={onChange}/>
    </div>
  )
}
