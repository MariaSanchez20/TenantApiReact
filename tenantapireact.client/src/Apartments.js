import { useState, useEffect } from 'react';
import axios from 'axios';

const ApartmentList = () => {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await axios.get('/api/apartments');
                setApartments(response.data);
            } catch (error) {
                console.error('Error fetching apartments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApartments();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Lista de Apartamentos</h1>
            <ul>
                {apartments.map(apartment => (
                    <li key={apartment.id}>
                        {apartment.name} - {apartment.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApartmentList;