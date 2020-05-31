/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// importing assets
import logo from '../../assets/svg-logos/ifit-coach-logo.svg';

const MainNav = ({ handleMenuToggle }) => (
    <div className="mainNav">
        <div className="mainNav__container">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="material-icons mobileNav__btn--open"
            >
                menu
            </button>
            <img src={logo} alt="ifit-logo" className="mainNav__logo" />
            <nav className="mainNav__nav">
                <ul className="mainNav__list">
                    <li className="mainNav__list--item">
                        <a href="#" className="mainNav__list--item--link">exercise</a>
                    </li>
                    <li className="mainNav__list--item">
                        <a href="#" className="mainNav__list--item--link">nutrition</a>
                    </li>
                    <li className="mainNav__list--item">
                        <a href="#" className="mainNav__list--item--link">activity</a>
                    </li>
                    <li className="mainNav__list--item">
                        <a href="#" className="mainNav__list--item--link">sleep</a>
                    </li>
                </ul>
            </nav>
            <button className="mainNav__btn" type="button">sign up</button>
        </div>
    </div>
);

export default MainNav;
