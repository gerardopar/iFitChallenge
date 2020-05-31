// importing modules
import { v4 as uuidv4 } from 'uuid';
// importing assets
import lakeImg from '../assets/img/lake.png';
import lakeAvatar from '../assets/img/avatar-lake.png';
import performanceImg from '../assets/img/series.png';
import performanceAvatar from '../assets/img/avatar-perf.png';
import pullsImg from '../assets/img/pulls.png';
import pullsAvatar from '../assets/img/avatar-pulls.png';
import tonedImg from '../assets/img/toned.png';
import tonedAvatar from '../assets/img/avatar-toned.png';
import raceImg from '../assets/img/race.png';
import raceAvatar from '../assets/img/avatar-race.png';
import hiitImg from '../assets/img/hiit-series.png';
import hiitAvatar from '../assets/img/avatar-red.png';
import riverImg from '../assets/img/river.png';
import riverAvatar from '../assets/img/avatar-river.png';
import burnImg from '../assets/img/burn.png';
import burnAvatar from '../assets/img/avatar-burn.png';


const DESKTOP_LIBRARY_DATA = [
    {
        id: uuidv4(),
        title: 'Lake Inniscarra, Ireland Pyramid',
        avatarSrc: lakeAvatar,
        imgSrc: lakeImg,
        durationStat: '30:53',
        distanceStat: '6,248 M',
        workouts: null,
    },
    {
        id: uuidv4(),
        title: 'Performance Series',
        avatarSrc: performanceAvatar,
        imgSrc: performanceImg,
        durationStat: null,
        distanceStat: null,
        workouts: 9,
    },
    {
        id: uuidv4(),
        title: 'Slow Pulls and Fast Intervals',
        avatarSrc: pullsAvatar,
        imgSrc: pullsImg,
        durationStat: '44:13',
        distanceStat: '9,948 M',
        workouts: null,
    },
    {
        id: uuidv4(),
        title: '20 Minutes to Toned',
        avatarSrc: tonedAvatar,
        imgSrc: tonedImg,
        durationStat: null,
        distanceStat: null,
        workouts: 12,
    },
    {
        id: uuidv4(),
        title: 'Charles Race, Boston, Massachusetts',
        avatarSrc: raceAvatar,
        imgSrc: raceImg,
        durationStat: '36:22',
        distanceStat: '8,648 M',
        workouts: null,
    },
    {
        id: uuidv4(),
        title: 'Full-Body, HIIT Series',
        avatarSrc: hiitAvatar,
        imgSrc: hiitImg,
        durationStat: null,
        distanceStat: null,
        workouts: 12,
    },
    {
        id: uuidv4(),
        title: 'Zafue River, Zambia-Power Stroke Pyramid',
        avatarSrc: riverAvatar,
        imgSrc: riverImg,
        durationStat: '22:22',
        distanceStat: '4,660 M',
        workouts: null,
    },
    {
        id: uuidv4(),
        title: 'Shred & Burn Series',
        avatarSrc: burnAvatar,
        imgSrc: burnImg,
        durationStat: null,
        distanceStat: null,
        workouts: 16,
    },
];

export { DESKTOP_LIBRARY_DATA as default };
