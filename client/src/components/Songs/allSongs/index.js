import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import {addFav,removeFav} from '../../../actions/fav';
import Spinner from '../../Spinner/Spinner';

import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Index = ({auth:{isAuthenticated,loading,user},addFav,removeFav}) => {
  const classes = useStyles();
  const list_of_data = <Fragment>
    {console.log(isAuthenticated,loading,user)}
      {isAuthenticated && loading && user && user.jsondata.map(song => {
          return <div key={song.id}>
                    <ListItem>
                        <ListItemAvatar>
                          {song.fav ?
                          <Avatar>
                              <Favorite onClick={() => removeFav(song._id)}/>
                          </Avatar>
                          :
                          <Avatar>
                              <FavoriteBorder onClick={() => addFav(song._id)} />
                          </Avatar>
                          }
                        </ListItemAvatar>
                        <Link to={`allsongs/${song._id}`}><ListItemText primary={`${song.title}`} /></Link>
                    </ListItem>
                    <Divider variant="inset" component="li" />
          </div>
      }
        )}

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
  addFav : PropTypes.func.isRequired,
  removeFav : PropTypes.func.isRequired,
}

export default connect(mapStateToProps,{addFav,removeFav})(Index);