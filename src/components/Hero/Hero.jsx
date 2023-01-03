import React from 'react'
import css from './Hero.module.css'
import noel from '../../assets/noel.png'
import Timer from '../../Timer/Timer'

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <h1>Hey, it's<br />Christmas time!</h1>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam inventore<br /> harum, autem expedita cupiditate nobis
          dolorem excepturi!</span>

        <button className={css.buttonn}>Explore Now</button>

        <div className={css.timeSeason}>
          <span>Time left for the holiday season</span>
          <div className={css.timers}>
            <Timer
              int="5"
              time="Day"
            />
            <span>:</span>
            <Timer
             int="5"
              time="Hours"
            />
            <span>:</span>
            <Timer
             int="5"
              time="Minutes"
            />
            <span>:</span>
            <Timer
             int="5"
              time="Seconds"
            />
          </div>

        </div>
      </div>
      

      <div className={css.right}>
        <img src={noel} alt="noel" />
      </div>


    </div>
    
  )
}

export default Hero


