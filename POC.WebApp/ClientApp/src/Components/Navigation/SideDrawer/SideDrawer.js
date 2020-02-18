import React, { Fragment } from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
    
    let attachedClasses = props.show ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close];

    return (
        <Fragment>
            <Backdrop
                show={ props.show }
                close={ props.toggle } />
            <div className={ attachedClasses.join(' ') }>
                <div className={ classes.Logo }>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default SideDrawer;