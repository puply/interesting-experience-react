import React from 'react'
import css from './Timer.module.css'

export default function Timer(props) {
  return (
    <div className={css.timercss}>
      <span>{props.int}</span>
      <span>{props.time}</span>
    </div>
  )
}
