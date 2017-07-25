const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')

// connection to the DB guestBook
mongoose.connect('mongodb://localhost/guestBook');

// create express app
const app = express();


const Comment = mongoose.model('comment', {
  name: String,
  email: String,
  content: String,
  timeStamp: Date,
});

// use middleware
app.use(express.static('guest-book-client/dist'));
app.use(bodyParser.json());

// get all comments route
app.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      console.log(err);
    } else {
      // write all comments
      res.write(JSON.stringify(comments));
      res.end();
    }

  })
});

//add new comment
app.post('/comments', (req, res) => {
  console.log(req.body);
  const comment = new Comment(req.body)
  comment.save((err) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(204);
      res.end();
    }
  })

});

// get all comments with name
app.get('/comments/:name', (req, res) => {
  Comment.find({
    name: req.params.name
  }, (err, comments) => { // find all comments
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.json(comments);
    }
  });
});

//listen to port 3000
app.listen(3000);


// create new comment
// const comment = new Comment({
//   name: 'Biss',
//   email: 'biss@livingroom.com',
//   content: 'biss likes everything'
// });
//
// comment.save((err) =>{
//   if (err) {
//     console.log(err);
//   } else {
//     Comment.find((err, comments) =>{
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(comments)
//         }
//     })
//   }
// });
