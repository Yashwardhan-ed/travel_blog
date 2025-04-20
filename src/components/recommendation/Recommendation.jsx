import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recommendation.css';

function Recommendation() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getPlaceData = async (query = 'tourist destination') => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
          query: query || 'tourist destination',
          limit: '6',
          offset: '0',
          units: 'km',
          location_id: '1',
          currency: 'USD',
          sort: 'relevance',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      const { data } = await axios.request(options);
      setPlaces(data.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch recommendations');
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlaceData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      getPlaceData(searchQuery);
    }
  };

  return (
    <div className="recommendations">
      <h2>Recommended Destinations</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a destination..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <div className="loading">Loading recommendations...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="recommendation-grid">
        {places.map((place) => (
          <div key={place.result_id} className="recommendation-card">
            <img 
              src={place.result_object?.photo?.images?.medium?.url || 
                   'https://source.unsplash.com/random/800x600/?travel'} 
            />
            <h3>{place.result_object?.name || 'Beautiful Destination'}</h3>
            <p>{place.result_object?.address || 
                'Explore this amazing destination'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
