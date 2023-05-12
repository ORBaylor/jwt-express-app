const express = require('express');
const app = express();
const posts = [
    {
        username: 'Big O',
        title: 'Post 1'
    },
    {
        username: 'Big B',
        title: 'Post 2'
    },

]



app.get('/post', (req, res) => {
    res.json(posts)
})

app.listen(3000)