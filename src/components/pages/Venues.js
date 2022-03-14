import React, {useEffect, useState} from 'react'

function Venues() {

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

  console.log(venues);
  return (
    <>
<div className="container">
  <h2>Venues</h2>
  <table className="table">
    <thead>
      <tr>
        <th>Venue</th>
        <th>Location</th>
        <th>Capacity</th>
        <th>Team</th>
      </tr>
    </thead>
    <tbody>
      {venues.map(venue => (
        <tr>
          <td><a href={`/venues/${venue.venue_id}`}>{venue.name}</a></td>
          <td>{venue.location}</td>
          <td>{venue.capacity}</td>
          <td>{venue.team}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </>
  )
}

export default Venues