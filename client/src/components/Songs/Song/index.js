import React,{Fragment} from 'react';
import music from './music.gif';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

//import s from "./songsData/Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Music].mp3";
const Index = ({match,auth:{isAuthenticated,loading,user}}) => {
    const image_round = {
        "float":"center"
    }
    let indv = (isAuthenticated && loading && user && user.jsondata.filter(  (song) => {
        return song._id === match.params.id
      }));
    return (
        <Fragment>
        <center>
            <img src={music} style={image_round}alt="play_track" height="300px" />
            <br />
            {isAuthenticated && loading && user ?
            <audio style={{"margin":"20px"}} controls autoPlay loop>
                <source src={require(`./songsData/${indv[0].title}.${indv[0].format}`).default} type="audio/ogg" />
                <source  src={require(`./songsData/${indv[0].title}.${indv[0].format}`).default} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            :
            <h4>
                Songs loading...
                </h4>}
        </center>
        </Fragment>

    )
}

const mapStateToProps = state =>({
    auth : state.auth
})
Index.propTypes = {
    auth:PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Index);