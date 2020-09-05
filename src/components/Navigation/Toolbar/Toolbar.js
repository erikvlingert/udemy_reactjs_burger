import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.open_sidedrawer}>MENU</div>
        {/*<Logo height={'80%'}/>*/}
        {/* Another way: */}
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;