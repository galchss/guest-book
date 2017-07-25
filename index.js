var mongoose = require('mongoose');

// connection to the DB guestBook
mongoose.connect('mongodb://localhost/guestBook');

var comment = mongoose.model('comment', {
  name: String,
  email: String,
  content: String,
  timeStamp: Date,
});

var comment = new comment({
  name: 'Biss',
  email: 'biss@livingroom.com',
  content: 'biss likes everything'
});

comment.save((err) =>{
  if (err) {
    console.log(err);
  } else {
    comment.find((err, comments) =>{
        if (err) {
          console.log(err);
        } else {
          console.log(comments)
        }
    })
  }
});
