import React from 'react'
import Tree from "@modules/tree/index"
import Content from "@modules/content/index"
import './index.scss'
export default function Main() {
  return (
    <div className="main" >
      <div className="container" >
        <Tree/>
        <Content/>
      </div>
    </div>
  )
}
