const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/category.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('course API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    const category_course = courses.filter(n => n.category_id === id);
    res.send(category_course);

})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse
        = courses.find(n => n._id === id);
    res.send(selectedCourse);
});
app.listen(port, () => {
    console.log('Server running on port', port);
})