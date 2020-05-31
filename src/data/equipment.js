// importing modules
import { v4 as uuidv4 } from 'uuid';
// importing assets
import treadmill from '../assets/img/treadmills.png';
import bikes from '../assets/img/bikes.png';
import ellipticals from '../assets/img/ellipticals.png';
import strength from '../assets/img/strength.png';

const EQUIPMENT_DATA = [
    {
        id: uuidv4(),
        title: 'Treadmills',
        imgSrc: treadmill,
    },
    {
        id: uuidv4(),
        title: 'Bikes',
        imgSrc: bikes,
    },
    {
        id: uuidv4(),
        title: 'Ellipticals',
        imgSrc: ellipticals,
    },
    {
        id: uuidv4(),
        title: 'Stength',
        imgSrc: strength,
    },
];

export { EQUIPMENT_DATA as default };
