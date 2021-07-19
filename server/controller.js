const Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find({}, (err, results) => {
        if(err) {
          console.log(err)
          res.status(400).send(err);
        } else {
          console.log('no error')
          res.status(200).send(results);
        }
      })
    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create({name: req.body.name, imageUrl: req.body.imgurl}, (err) => {
        console.log(req.body)
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send("Added")
        }
      })
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  }
};

module.exports = controller