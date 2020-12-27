// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    const props = 'string' === typeof child.type
      ? {}
      : {on, toggle}

      return React.cloneElement(child, props)
  })
}

const ToggleOn = ({children, on}) => on ? children : null
const ToggleOff = ({children, on}) => on ? null : children
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
