const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const EmployeeModel = require('./models/Employee')

const app=express()
app.use(express.json())
app.use(cors())

//Yeh line aapke local MongoDB instance se employee database ko connect karti hai.
mongoose.connect("mongodb://127.0.0.1:27017/employee")


app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    EmployeeModel.findOne({ email: email }) 
    //Yeh MongoDB query hai jo EmployeeModel collection me email field ke basis par ek user dhoondti hai.
   //agar koi document (user) milta hai jiska email match karta hai, toh yeh document return karti hai, warna null return karti hai.

    // findOne() ek asynchronous operation hai, iska matlab hai ki query ko complete hone mein thoda waqt lagta hai.
   // Jab query complete ho jati hai, toh jo result milta hai usse .then() block me handle kiya jata hai.
  // Yahaan user variable wo result hota hai jo MongoDB se aata hai, yaani findOne() ke response mein milne wala user object.
      .then(user => {
     if (user) {
       if (user.password === password) {
            res.json("Success");
      } else {
            res.json("The Password is Incorrect");
      }
        } else {
          res.json("No record existed"); // Handle case where user is not found
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json("Error occurred");
     });
  });

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Create a new employee instance
        const newEmployee = new EmployeeModel({ name, email, password });

        // Save the employee to the database
        await newEmployee.save();

        res.status(200).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving user' });
    }
});
// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body;
//     res.status(200).json({ message: 'User registered successfully!' });
// });

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
