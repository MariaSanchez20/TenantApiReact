import React, { useState, useEffect } from 'react'; // Asegúrate de importar React
import axios from 'axios';

const ElectricityConsumptionList = () => {
    const [consumptions, setConsumptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConsumptions = async () => {
            try {
                const response = await axios.get('/api/electricityconsumption');
                setConsumptions(response.data);
            } catch (error) {
                console.error('Error fetching electricity consumption:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchConsumptions();
    }, []);

    if (loading) return React.createElement('p', null, 'Loading...');

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Consumo de Electricidad'),
        React.createElement(
            'ul',
            null,
            consumptions.map(consumption =>
                React.createElement(
                    'li',
                    { key: consumption.id },
                    `Apartamento ID: ${consumption.apartmentId} - Fecha: ${consumption.date} - kWh: ${consumption.kilowattHours}`
                )
            )
        )
    );
};

export default ElectricityConsumptionList;