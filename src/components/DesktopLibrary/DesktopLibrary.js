import React from 'react';
// importing components
import DesktopLibraryItem from './DesktopLibraryItem';
// importing data
import DESKTOP_LIBRARY_DATA from '../../data/desktopLibrary';

const DesktopLibrary = () => (
    <div className="desktopLib">
        <div className="desktopLib__container">
            {
                DESKTOP_LIBRARY_DATA.map((item) => (
                    <DesktopLibraryItem key={item.id} {...item} />
                ))
            }
        </div>
    </div>
);

export default DesktopLibrary;
