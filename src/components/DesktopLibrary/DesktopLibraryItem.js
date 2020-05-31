import React from 'react';

const DesktopLibraryItem = ({
 avatarSrc,
 distanceStat, durationStat,
 imgSrc, title, workouts,
}) => {
    const stats = (
        <React.Fragment>
            <i className="material-icons desktopLib__stats--icon">timer</i>
            &nbsp;
            <p className="desktopLib__stats--time">{durationStat}</p>
            &nbsp;&nbsp;
            <i className="material-icons desktopLib__stats--icon">donut_large</i>
            &nbsp;
            <p className="desktopLib__stats--miles">{distanceStat}</p>
        </React.Fragment>
    );

    return (
    <div className="desktopLib__col">
        <div className="desktopLib__img">
            {workouts > 0 && (
            <div className="desktopLib__img--overlay">
                <p className="desktopLib__img--overlay--num">{workouts}</p>
                <p className="desktopLib__img--overlay--text">workouts</p>
                <i className="material-icons desktopLib__img--overlay--icon">list</i>
            </div>
            )}
            <img className="desktopLib__img--src" src={imgSrc} alt={title} />
        </div>
        <div className="desktopLib__content">
            <p className="desktopLib__content--text">{title}</p>
            <img className="desktopLib__content--avatar" src={avatarSrc} alt={title} />
        </div>
        <div className="desktopLib__stats">
            {durationStat && distanceStat ? stats : <p className="desktopLib__stats--time">&nbsp;</p>}
        </div>
        <button className="desktopLib__btn" type="button">VIEW DETAILS</button>
    </div>
    );
};

export default DesktopLibraryItem;
