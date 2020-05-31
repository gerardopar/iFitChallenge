/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// importing assets
import youtubeIcon from '../../assets/icons/youtube.png';
import pinterestIcon from '../../assets/icons/pinterest.png';
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instagramIcon from '../../assets/icons/instagram.png';

const Footer = () => {
    const [langSelected, setLangSelected] = useState('English');

    const handleUserInput = (e) => {
        const { value } = e.target;
        setLangSelected(value);
    };

    return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__col footer__col--links">
                <ul className="footer__list">
                    <h3 className="footer__list--title">Company</h3>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">About</a></li>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Contact Us</a></li>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Careers</a></li>
                </ul>
                <ul className="footer__list">
                    <h3 className="footer__list--title">Account</h3>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Log In</a></li>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Create Account</a></li>
                </ul>
                <ul className="footer__list">
                    <h3 className="footer__list--title">Support</h3>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Help Center</a></li>
                    <li className="footer__list--item"><a href="#" className="footer__list--item--link">Accessibility</a></li>
                </ul>
            </div>
            <div className="footer__col">
                <div className="footer__icon">
                    <div className="footer__icon--circle" />
                    <img className="footer__icon--src" src={youtubeIcon} alt="youtube icon" />
                </div>
                <div className="footer__icon">
                    <div className="footer__icon--circle" />
                    <img className="footer__icon--src" src={pinterestIcon} alt="pinterest icon" />

                </div>
                <div className="footer__icon">
                    <div className="footer__icon--circle" />
                    <img className="footer__icon--src" src={facebookIcon} alt="facebook icon" />
                </div>
                <div className="footer__icon">
                    <div className="footer__icon--circle" />
                    <img className="footer__icon--src" src={twitterIcon} alt="twitter icon" />
                </div>
                <div className="footer__icon">
                    <div className="footer__icon--circle" />
                    <img className="footer__icon--src" src={instagramIcon} alt="instagram icon" />
                </div>
            </div>
            <div className="footer__col footer__col--copyright">
                <p className="footer__text">&copy; iFIt.com. All Rights Reserved.</p>
                <a className="footer__text footer__text--link">Privacy Policy</a>
                <a className="footer__text footer__text--link">Terms of Use</a>

                <select
                  className="footer__langSelector"
                  onChange={handleUserInput}
                  name="language"
                  value={langSelected}
                >
                    <option className="footer__langSelector--option" value="English">English</option>
                    <option className="footer__langSelector--option" value="Spanish">Spanish</option>
                </select>
            </div>
        </div>
    </div>
);
};

export default Footer;
