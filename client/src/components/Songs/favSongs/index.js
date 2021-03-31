import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Favorite from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {removeFav} from '../../../actions/fav';
import Spinner from '../../Spinner/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Index = ({auth:{isAuthenticated,loading,user},removeFav}) => {
  const classes = useStyles();
  const list_of_data = <Fragment>
      {isAuthenticated && loading && user && user.jsondata.filter(song => song.fav===true).length>0 ? user.jsondata.map(song => (
        song.fav && 
            <div key={song.id}>
                    <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                              <Favorite onClick={() => removeFav(song._id)}/>
                          </Avatar>
                          
                        </ListItemAvatar>
                        <Link to={`favsongs/${song._id}`}><ListItemText primary={`${song.title}`} /></Link>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                          
          </div>)

        ):<Fragment>
          <h4>No favorite song found, Kindly add your favorite song from all songs.</h4>
          </Fragment>}

  </Fragment>
  return (
    <center>
    <List className={classes.root}>
        
    {!loading? <Spinner /> : list_of_data}
        
    </List>
    </center>
  );
}

const mapStateToProps = state =>({
  auth : state.auth
})

Index.propsTypes = {
  auth : PropTypes.object.isRequired,
  removeFav : PropTypes.func.isRequired,
}

export default connect(mapStateToProps,{removeFav})(Index);