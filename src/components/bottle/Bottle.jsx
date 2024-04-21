import PropTypes from 'prop-types'

import './bottle.css'
const Bottle = ({bottle, handleTocart}) =>{
    const {name, img, price} = bottle
    return(
        <div className='bottle'>
          <h3>Bottle: {name}</h3>
          <img src={img} alt="" />
          <p>Price: ${price}</p>
          <button onClick={() => handleTocart(bottle)}>Prucess</button>
        </div>
    )
}

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleTocart : PropTypes.func.isRequired
}

export default Bottle;