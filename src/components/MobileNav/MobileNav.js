/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MobileNav = ({ handleMenuToggle }) => (
    <React.Fragment>
        <div className="mobileNav__header">
            <button className="material-icons mobileNav__btn--close" onClick={handleMenuToggle} type="button">close</button>
        </div>

        <nav className="mobileNav__nav">
            <ul className="mobileNav__nav--list">
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">blog</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">nourish</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">shop</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">exercise</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">nutrition</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">activity</a></li>
                <li className="mobileNav__list--item"><a href="#" className="mobileNav__list--item--link">sleep</a></li>
            </ul>
        </nav>

        <div className="mobileNav__btn--wrap">
            <button type="button" className="mobileNav__btn">sign up</button>
        </div>
    </React.Fragment>
);

export default MobileNav;
