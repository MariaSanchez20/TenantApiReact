import { createElement } from 'react';
import ApartmentList from './ApartmentList';
import ElectricityConsumptionList from './ElectricityConsumptionList';

const App = () => {
    return createElement(
        'div',
        null,
        createElement(ApartmentList),
        createElement(ElectricityConsumptionList)
    );
};

export default App;