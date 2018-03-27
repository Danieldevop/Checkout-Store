import React, { Component } from 'react'
import './header.css'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  titleColor: {
    color: '#C09F69',
  },

  bgColor: {
    background: '#17334F',
  }
}

class Header extends Component {
  renderLoginButton() {
    {
      if (this.props.status) {
        return (
          <Button color="inherit" onClick={this.props.logout} >LogOut</Button>
        )
      }
      else {
        return (
          <Button color="inherit" onClick={this.props.login} >Login</Button>
        )
      }
    }
  }

  render() {

    const { classes } = this.props

    return (
      <div className={classes.root} >
        <AppBar position="static" className={classes.bgColor} >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" className={classes.flex} >
               <span className={classes.titleColor}>GoldStore</span>
            </Typography>
            {this.renderLoginButton()}
          </Toolbar>
        </AppBar>
      </div>

    )
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)