import React, { useState, useRef, useEffect } from 'react';
// importing components
import ProductNav from '../ProductNav/ProductNav';
import Navigation from '../Navigation/Navigation';
import MainNav from '../MainNav/MainNav';
import MobileNav from '../MobileNav/MobileNav';
// importing assets
import heroImg from '../../assets/img/hero.png';

const Hero = () => {
    const navRef = useRef(null); // initialize navigation ref
    const [toggle, setToggle] = useState(false); // mobile-menu toggle state
    const handleMenuToggle = () => setToggle((prevToggle) => !prevToggle); // handle menu toggle
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 750; // check scroll position
            if (isTop) { // if the scroll-position is past the hero component
                navRef.current.style.marginTop = '-150px'; // hide the navigation
            } else { // else
                navRef.current.style.marginTop = '0px'; // show the navigation
            }
        });
        // on component unmount, remove scroll event handler
        return () => window.removeEventListener('scroll', () => {});
    }, []);


    return (
        <React.Fragment>
            { toggle
                ? (
                <div className="mobileNav mobileNav__active">
                    <MobileNav handleMenuToggle={handleMenuToggle} />
                </div>
                ) : <div className="mobileNav" /> }
            <Navigation navRef={navRef}>
                <ProductNav />
                <MainNav handleMenuToggle={handleMenuToggle} />
            </Navigation>
            <div
              className="hero"
              style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.45)), url(${heroImg})` }}
            >
                <div className="hero__container">
                    <h1 className="hero__title">
                        The best personal training,
                        <br />
                        right in your own home
                    </h1>
                    <button className="hero__btn" type="button">JOIN IFIT COACH</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Hero;
