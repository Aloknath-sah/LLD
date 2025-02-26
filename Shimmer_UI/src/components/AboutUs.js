import React from 'react'
import { LangConstant } from '../utils/LangConstant'

export const AboutUs = ({lang}) => {

  const data = LangConstant[lang];
  return (
    <div>
      <div> {data.title} </div>
      <div> {data.desc} </div>
    </div>
  )
}
