import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CourseDetail = ({name, id, price, author, setActiveCourse}) => (
  <StrictMode>
    <div className="container">
      <div>
        <button
          className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left"
        >
          <Link to="/">
            <i className="fas fa-arrow-left" style={{color: "white"}}/>
          </Link>
        </button>
        <h1 className="text-primary text-center">{name}</h1>
        <p className="text-secondary">
          By {author}
        </p>
        <p>Price: ${price} </p>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={name}
          className="embed-responsive-item"
          allowFullScreen
        />
      </div>
      <a>
        {}
      </a>
      <p>Description: {}</p>
    </div>
  </StrictMode>
);

CourseDetail.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ ...state.activeCourse });

export default connect(mapStateToProps)(CourseDetail);
