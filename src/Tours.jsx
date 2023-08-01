import Tour from './Tour';

const Tours = ({tours,handleClearTour}) => {
  const tourTemplate = tours.map((tour) => {
  	return <Tour key={tour.id} {...tour} handleClearTour={handleClearTour}/>;
  });
  return (
  	<section>
  	  <div className="title">
  	    <h2>our tours</h2>
  	    <div className="underline"></div>
  	  </div>
  	  <div>{tourTemplate}</div>
  	</section>
  );
};

export default Tours;
