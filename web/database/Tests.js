const { User, Course, Vote } = require('./Models');
const {
  ADD_USER, ADD_COURSE, ADD_VOTE, DELETE_VOTE,
} = require('./Queries');

/**
 *
 * ======= SAMPLE DATA ============
 *
 */

// // // force: true will drop the table if it already exists
// User.sync({ force: true })
//   .then(() =>
//     User.create({
//       username: 'mikeee',
//       email: 'mike@m.com',
//       password: '1234',
//     }))
//   .then((user) => {
//     Course.sync({ force: true })
//       .then(() =>
//         Course.create({
//           title: 'someCourse',
//           description: 'You can learn things here',
//           url: 'course.com',
//           category: 'react',
//         }))
//       .then((course) => {
//         Vote.sync({ force: true }).then(() =>
//           Vote.create({
//             user_id: user.id,
//             course_id: course.id,
//             vote_type: 'upvote',
//           }));
//       });
//   });

// // Test user data
// const username = 'M';
// const email = 'aee@m.com';
// const password = '555';

// const user = { username, email, password };

// ADD_USER(user);

// const testCourse = {
//   title: 'Testing 102',
//   url: 'test2.com',
//   instructor: '',
//   description: 'this is a course also',
//   price: 5.5,
// };

// ADD_COURSE(testCourse);

// Add vote
// contains userId, courseId, voteType

// Test Vote
// const testVote = {
//   userId: 2,
//   courseId: 1,
//   voteType: 'downvote',
// };

// ADD_VOTE(testVote);

// Test vote deletion
// DELETE_VOTE({ userId: 2, courseId: 1 });