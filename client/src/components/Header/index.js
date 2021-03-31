import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth';

const Index = ({auth:{isAuthenticated,user},logout}) => {
    const font_size = {
        "fontSize": "12px"
    }
    const authLink = <Fragment>
                    <li className="nav-item">
                        <Link to="/allsongs" className="nav-link smoothScroll">All Songs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favsongs" className="nav-link smoothScroll">Favorite Songs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link smoothScroll" onClick={logout}>Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/allsongs" className="nav-link contact">{user && user.name}</Link>
                    </li>
    </Fragment>

const unauthLink = <Fragment>
            <li className="nav-item">
                            <Link to="/allsongs" className="nav-link smoothScroll">All Songs</Link>
                        </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link contact">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link contact">Register</Link>
            </li>
</Fragment>


    return (
        <Fragment>
                <nav className="navbar navbar-expand-lg">
 
            <Link className="navbar-brand" to="/">
              <i className="fa fa-music"></i>
              {' '}Music World <small style={font_size}>Listen your favorite</small>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? <Fragment>{authLink}</Fragment> : <Fragment>
                        {unauthLink}
                    </Fragment>}
                </ul>
            </div>

    </nav>

        </Fragment>
    )
}
Index.propTypes = {
    auth:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
    auth : state.auth,
})

export default connect(mapStateToProps,{logout})(Index);