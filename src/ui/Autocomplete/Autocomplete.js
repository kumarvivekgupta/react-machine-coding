import React, { useState, useEffect } from 'react';
import './Autocomplete.css';

import debounce from 'lodash.debounce';
const AutoSearch = () => {
    const [query, setQuery] = useState('');  // Input value
    const [results, setResults] = useState([]);  // Search results
    const [loading, setLoading] = useState(false);  // Loading state

    // Function that will make the API request (or in this case, filter data)
    const search = (query) => {
        if (query) {
            setLoading(true);

            // Simulate API call (replace this with your actual API request)
            setTimeout(() => {
                const mockData = ['apple', 'banana', 'grapes', 'orange', 'pineapple', 'peach'];
                const filteredResults = mockData.filter(item =>
                    item.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredResults);
                setLoading(false);
            }, 500);  // Simulate network delay
        } else {
            setResults([]);
            setLoading(false);
        }
    };

    // Create the debounced version of the search function
    const debouncedSearch = debounce(search, 3000);

    // Handle the input change
    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        debouncedSearch(newQuery);  // Call the debounced search function
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />

            {loading && <div>Loading...</div>}

            {results && (
                <ul className='dropdown'>
                    {results.map((result, index) => (
                        <li className='item' key={index}>{result}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoSearch;