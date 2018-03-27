import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import gold from '../img/gold.png'

const styles = {
  card: {
    maxWidth: 400,
    marginTop: 70,
  },
  media: {
    height: 200,
  },

  Wd: {
    width: 'calc(100%)',
  }
};

function Homepage(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container item justify="center" className={classes.Wd}  >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={gold}
            title="Gold"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Gold Diamond
          </Typography>
            <Typography component="p">
              Gold is the bedrock asset of any portfolio
              Buying gold is an important way to preserve your purchasing power. It is a widely accepted investment principle that any serious investor should hold at least 10% of their portfolio in precious metals. Physical gold is a reliable and trustworthy asset, and is therefore an insurance against today’s monetary turmoil. Find out more about why to invest in gold.
              As well as gold, you may also consider investing in other precious metals such as silver, platinum, and palladium. Find out more about these metals and how you can optimise your investments by diversifying your portfolio of precious metals.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="primary" onClick={props.handlePage} >
              Buy this item
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);