import axios from 'axios';

const SET_ACTIVE_COURSE = 'SET_ACTIVE_COURSE';
const FETCH_COURSES = 'FETCH_COURSES';

const setActiveCourse = course => {
  console.log('Setting course!', course);
  return {
  type: SET_ACTIVE_COURSE,
  course,
  }
}

const fetchCourses = courses => ({
  type: FETCH_COURSES,
  courses,
});

const fetchCoursesAsync = () => (async (dispatch) => {
  const { data } = await axios.get('/api/courses');
  console.log('Data retrieved: ', data);
  dispatch(fetchCourses(data));
});

module.exports = {
  setActiveCourse,
  SET_ACTIVE_COURSE,
  fetchCoursesAsync,
  FETCH_COURSES,
};
