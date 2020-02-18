import React, { Fragment, useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(true);

    const toggleShowSideDawer = () => {
        setShowSideDrawer((prevShowSideDrawer) => !prevShowSideDrawer);
    };

    return (
        <Fragment>
            <Toolbar toggle={ toggleShowSideDawer } />
            <SideDrawer
                show={ showSideDrawer }
                toggle={ toggleShowSideDawer } />
            <main className={ classes.Content }>
                { props.children }
            </main>
        </Fragment>);
};

export default Layout;