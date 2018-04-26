import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  state = {
    modalSelected: 'Login',
    modal: false,
  };

  toggleSignupModal = () => this.setState({ modalSelected: 'Sign Up' }, this.toggleModal);

  toggleLoginModal = () => this.setState({ modalSelected: 'Login' }, this.toggleModal);

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  render = () => (
    <nav className="navbar navbar-expand-md bg-info">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Link to="/courses/add" className="nav-item clickable">
          Add Course
        </Link>

        {this.props.user.username !== '' ? (
          <Fragment>
            <Link to="/profile" className="nav-item clickable">
              Profile
            </Link>
            <div className="nav-item clickable">
              <a className="nav-link" onClick={this.toggleModal}>
                Logout
              </a>
            </div>
          </Fragment>
        ) : (
          <div className="nav-item clickable">
            <a className="nav-link" onClick={this.toggleModal}>
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(NavBar);
