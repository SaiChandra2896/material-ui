import React,{Fragment} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

const ElevationScroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin:{
          ...theme.mixins.toolbar,
          marginBottom: '3em'
      },
      logo:{
        height: '7em'
      }
  }));
 const  Header =(props) =>{
     const classes = useStyles();
    return (
        <Fragment>
        <ElevationScroll>
        <AppBar position='fixed'>
            <Toolbar disableGutters>
                <img src={logo} alt='logo'className={classes.logo}/>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        </Fragment>
    )
}

export default Header;