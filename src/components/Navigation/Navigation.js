import React from 'react';

const Navigation = ({ children, navRef }) => (<div className="navigation" ref={navRef}>{ children }</div>);

export default Navigation;
