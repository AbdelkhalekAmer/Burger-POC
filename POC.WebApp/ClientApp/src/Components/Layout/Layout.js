import React, { Fragment, useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(true);

    const toggleShowSideDawer = () => {

        if (showSideDrawer) {
            setShowSideDrawer(false);
        }
        else {
            setShowSideDrawer(true);
        }

    };

    return (
        <Fragment>
            <Toolbar />
            <SideDrawer
                show={ showSideDrawer }
                close={ toggleShowSideDawer } />
            <main className={ classes.Content }>
                { props.children }
            </main>
        </Fragment>);
};

export default Layout;