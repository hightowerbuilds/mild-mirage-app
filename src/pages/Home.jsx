import styled from "styled-components"
import { NavLink } from "react-router-dom"

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  font-family: monospace;
`


export default function Home() {
  return (
    <div>
      <H1>
        The Mild Mirage
      </H1>
      <p>This is the (scratch) home page</p>

      <NavLink to='/dashboard'>Dashboard</NavLink>
    </div>
  )
}
