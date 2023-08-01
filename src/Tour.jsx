import { useState } from 'react';

const Tour = ({id,  name, info, image: img, price, handleClearTour }) => {
  const [show, setShow] = useState(false);
  return (
  	<article className="single-tour">
  	  <img src={img} alt={name} />
  	  <footer>
  	    <div className="tour-info">
  	      <h4>{name}</h4>
  	      <h4 className="tour-price">${price}</h4>
  	    </div>
  	    <p className={show ? "active" : undefined}>{info}</p>
  	    <button onClick={() => setShow(!show)}>Read {show ? "less" : "more"}</button>
  	    <button className="delete-btn" onClick={() => handleClearTour(id)}>
  	      not interested
  	    </button>
  	  </footer>
  	</article>
  );
};

export default Tour;
