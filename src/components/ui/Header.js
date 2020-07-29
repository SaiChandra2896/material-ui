import React,{Fragment,useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

import logo from '../../assets/logo.svg';

//To set navbar fixed on the top we have to make elevation scroll see in material ui documentation
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

  // To wite our own styles
  const useStyles = makeStyles(theme => ({
      toolbarMargin:{
        //we can apply theme styles here
          ...theme.mixins.toolbar,
          marginBottom: '3em'
      },
      logo:{
        height: '7em'
      },
      tabContainer:{
        marginLeft: 'auto'
      },
      tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft:'25px'
      }
  }));
 const  Header =(props) =>{
     const classes = useStyles();
     const [value,setValue] = useState(0);

     const handleChange = (e,newValue) =>{
        setValue(newValue);
     }
    return (
        <Fragment>
        <ElevationScroll>
        <AppBar position='fixed'>
          {/* we diable gutters disables all the default styles */}
            <Toolbar disableGutters> 
                <img src={logo} alt='logo'className={classes.logo}/>
                {/* Lets us use Tabs */}
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                  <Tab label='Home' className={classes.tab}/>
                  <Tab label='Services' className={classes.tab}/>
                  <Tab label='The Revolution' className={classes.tab}/>
                  <Tab label='About Us' className={classes.tab}/>
                  <Tab label='Contact Us' className={classes.tab}/>
                </Tabs>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        </Fragment>
    )
}

export default Header;
