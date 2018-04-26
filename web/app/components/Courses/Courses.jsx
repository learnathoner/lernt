import React, { Component } from 'react';
import Course from './Course.jsx';
import PropTypes from 'prop-types';

const Courses = ({ courses }) => (
  <div>
    {courses.map(course => (
      <Course
        name={course.name}
        id={course.id}
        key={course.id}
      />
    ))}
  </div>
);

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Courses;