import React from 'react';

const MenuItem = (props) => {
    const menu = props.menu
    return (
        <li>
            <a href="pages/layout/top-nav.html">
                <i className= {menu.PROGRAM_ICON}></i>
                {menu.DESC_ENG}</a>
        </li>
    );
};

export default MenuItem;