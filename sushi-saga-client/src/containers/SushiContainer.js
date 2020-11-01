import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, nextFour, addPlate, moneyLeft}) => {
  return (
    <Fragment>
      <div className="belt">
        { sushi.map(s => {
          return (
            <Sushi sushi={s} key={s.id} addPlate={addPlate} moneyLeft={moneyLeft}/>
          )
        })
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer