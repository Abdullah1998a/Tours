import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
  	  const response = await fetch(url);
  	  const data = await response.json();
  	  setTours(data);
  	  setIsLoading(false);
    } catch {
  	  setIsLoading(false);
    };
  };
  useEffect(() => {
  	fetchData();
  }, []);
  const handleClearTour = (id) => {
  	const newTours = tours.filter((tour) => tour.id !== id);
  	setTours(newTours);
  };
  const handleRefresh = () => {
    fetchData();
  };
  if (isLoading) {
  	return (
  	  <main>
        <Loading />
  	  </main>
  	);
  }
  if (tours.length == 0) {
  	return (
  	  <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={handleRefresh}>refresh</button>
        </div>
  	  </main>
  	);
  }
  return (
  	<main>
  	  <Tours tours={tours} handleClearTour={handleClearTour}/>
  	</main>
  );
}

export default App;
