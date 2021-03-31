import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// Add fav
export const addFav = (id) => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try{
      const res = await axios.put(`/api/fav/add/${id}`);
      dispatch({
          type: "USER_LOADED",
          payload: res.data
        });
    }
    catch(err){
      dispatch({
          type: "AUTH_ERROR"
        });
    }
  }
  // Add fav
export const removeFav = (id) => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try{
      const res = await axios.put(`/api/fav/remove/${id}`);
      dispatch({
          type: "USER_LOADED",
          payload: res.data
        });
    }
    catch(err){
      dispatch({
          type: "AUTH_ERROR"
        });
    }
  }