import React, { Component } from 'react'
import Button from 'material-ui/Button'
import img from '../img/ft.jpg'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Homepage from '../components/homepage'
import Checkout from '../components/checkout'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#C09F69',
  },

  imgWidth: {
    width: 'calc(100%)'
  }
});

class Body extends Component {

  state = {
    clickBuy: false,
  }

  handlePage = () => {
    this.setState({ clickBuy: true })
  }

  render() {

    const { classes } = this.props

    if (this.state.clickBuy) {
      return(
        <Checkout 
          handlePage={this.handlePage}
        />
      )
    }

    if (this.props.state) {
      return (
        <Homepage
          handlePage={this.handlePage}
        />
      )
    }
    else {
      return (
        <div>
          <Grid className={classes.paper} >
            <Grid item xs={12}>
              <h1>To buy Gold please Login and sit Back.</h1>
            </Grid>
            <Grid container item justify="center" className={classes.imgWidth} >
              <img src={img} alt="img" width="" />
            </Grid>
            <Grid item xs={12} >
              <Button variant="raised" color="primary" size="large" onClick={this.props.login} >
                Login with google
              </Button>
            </Grid>
          </Grid>
        </div>
      )
    }
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body)