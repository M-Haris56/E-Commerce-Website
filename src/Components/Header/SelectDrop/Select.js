import React, { useEffect, useState } from 'react';
import './Select.css';
import axios from 'axios';

const Select = ({ onSelect }) => {
    const [countryList, setCountryList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

    // Fetch country list from API
    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const countries = response.data.map((country) => country.name.common);
            setCountryList(countries);  // Set country list to state
        } catch (error) {
            console.log('Error fetching country data:', error.message);
        }
    };

    // Fetch countries when the component mounts
    useEffect(() => {
        getCountries();
    }, []);

    // Handle selecting a list item
    const handleSelect = (value) => {
        if (onSelect) {
            onSelect(value);  // Call the onSelect function with the selected value
        }
    };

    // Handle search term change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter the country list based on the search term
    const filteredCountries = countryList.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="select-dropdown">
            <div className='searchfield'>
                <input
                    type='text'
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearch}  // Handle input changes
                />
            </div>
            <ul className='searchresult'>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country, index) => (
                        <li key={index} onClick={() => handleSelect(country)}>
                            {country}
                        </li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
};

export default Select;
