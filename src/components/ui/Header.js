import React,{Fragment,useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
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
      logoContainer:{
        padding: 0,
        "&:hover":{
          backgroundColor: 'transparent'
        }
      },
      logo:{
        height: '8em'
      },
      tabContainer:{
        marginLeft: 'auto'
      },
      tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft:'25px'
      },
      button:{
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '15px',
        marginRight: '25px',
        height: '45px'
      }
  }));
 const  Header =(props) =>{
     const classes = useStyles();
     const [value,setValue] = useState(0);
     const [anchorEl, setAnchorEl] = useState(null);
     const [open, setOpen] = useState(false);

     const handleChange = (e,newValue) =>{
        setValue(newValue);
     }

     const handleClick = (e) =>{
      setAnchorEl(e.currentTarget);
      setOpen(true);
      setValue(1);
     }

     const handleClose = (e) =>{
       setAnchorEl(null);
       setOpen(false);
     }

    //  To maintain correct route upon reload
     useEffect(() =>{
       if(window.location.pathname === "/" && value !== 0){
         setValue(0);
       }else if(window.location.pathname === '/services' && value !== 1){
         setValue(1);
       }else if(window.location.pathname === '/revolution' && value !== 2){
        setValue(2);
      }else if(window.location.pathname === '/about' && value !== 3){
        setValue(3);
      }else if(window.location.pathname === '/contact' && value !== 4){
        setValue(4);
      }else if(window.location.pathname === '/estimate' && value !== 5){
        setValue(5);
      }
     },[value]);
    return (
        <Fragment>
        <ElevationScroll>
        <AppBar position='fixed'>
          {/* we diable gutters disables all the default styles */}
            <Toolbar disableGutters>
              <Button component={Link} to="/" className={classes.logoContainer} onClick={() =>setValue(0)} disableRipple>
                <img src={logo} alt='logo'className={classes.logo}/>
              </Button> 
                {/* Lets us use Tabs */}
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                  {/* to tell tab which path to navigate we use component prop to link the routing and to prop to tell the path*/}
                  <Tab label='Home' className={classes.tab} component={Link} to="/"/>
                  {/* aria-owns and aria-haspopup are required to add menu to the tabs */}
                  <Tab label='Services' aria-owns={anchorEl ? "simple-menu": undefined} aria-haspopup={anchorEl ? true : undefined}
                   className={classes.tab} component={Link} to="/services" onMouseOver={(e) =>handleClick(e)}/>
                  <Tab label='The Revolution' className={classes.tab} component={Link} to="/revolution"/>
                  <Tab label='About Us' className={classes.tab} component={Link} to="/about"/>
                  <Tab label='Contact Us' className={classes.tab} component={Link} to="/contact"/>
                </Tabs>
                <Button variant='contained' color='secondary' className={classes.button}>
                  Free Estimate
                </Button>
                {/* id should match with aria owns which was defined on services tab */}
                <Menu id='simple-menu' anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}>
                <MenuItem onClick={handleClose} component={Link} to='/services'>Services</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to='/customsoftware'>Custom Software Development</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to='/mobileapps'>Mobile App Development</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to='/websites'>Website Development</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        </Fragment>
    )
}

export default Header;
