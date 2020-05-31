// importing modules
import { v4 as uuidv4 } from 'uuid';
// importing assets
import gearJunkie from '../assets/svg-logos/gear-junkie-logo.svg';
import wired from '../assets/svg-logos/wired-logo.svg';
import mashable from '../assets/svg-logos/mashable-logo.svg';

const SLIDER_DATA = [{
    id: uuidv4(),
    index: 0,
    img: gearJunkie,
    text: '"You focus on putting in the work, and the technology handles the rest."',
    alt: 'gearJunkie-logo',
}, {
    id: uuidv4(),
    index: 1,
    img: wired,
    text: '"Literally transports you from home to wherever you choose to run."',
    alt: 'wired',
},
{
    id: uuidv4(),
    index: 2,
    img: mashable,
    text: '"Breathes new life into a tired, old running routine."',
    alt: 'mashable',
},
{
    id: uuidv4(),
    index: 3,
    img: gearJunkie,
    text: '"You focus on putting in the work, and the technology handles the rest."',
    alt: 'gearJunkie-logo',
}, {
    id: uuidv4(),
    index: 4,
    img: wired,
    text: '"Literally transports you from home to wherever you choose to run."',
    alt: 'wired',
},
{
    id: uuidv4(),
    index: 5,
    img: mashable,
    text: '"Breathes new life into a tired, old running routine."',
    alt: 'mashable',
}];

export { SLIDER_DATA as default };
