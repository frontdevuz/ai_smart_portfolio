import React from 'react'
import { ContainerDL } from './ContainerSL'

export default function Container(props) {
  return (
   <ContainerDL>{props.children}</ContainerDL>
  )
}
