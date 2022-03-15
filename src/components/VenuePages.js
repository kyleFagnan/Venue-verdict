import React, {useEffect, useState} from 'react'



function VenuePages() {
  const [venues, setVenues] = useState([]);
  
  const getVenue = async () => {
    try {
      const response = await fetch("http://localhost:5000/venues")
      const jsonData = await response.json()

      setVenues(jsonData);

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getVenue();
  }, []);
  return (
    <div>
    
      
      <h1>hi</h1>
      
    </div>
  )
}

export default VenuePages