const express = require("express")
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send("digital edu server is running");
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});
app.get('/category', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if (id === '07') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(n => n.categoryid == id);
        console.log(category_courses)
        res.send(category_courses);
    }
})
app.get('/courses', (req, res) =>{
    res.send(courses);
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses= courses.find(n => n.id == id);
    res.send(selectedCourses);
});


app.listen(Port, () => {
    console.log("digital edu server is running", Port);
})