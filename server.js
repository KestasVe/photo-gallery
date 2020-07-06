var Flickr = require('flickr-sdk');
const express = require('express');

const PORT = process.env.PORT || 5000;
const API_KEY= process.env.API_KEY || '00ac5f70d662304b87e7da585bbdef9d';
const API_SECRET= process.env.API_SECRET || 'aff70630a261a66a';

var flickr = new Flickr(API_KEY);

const app = express();

app.get('/images/api', (req, res) => {
  flickr.photos.getRecent({
    page: req.query.page,
    per_page: 10
  }).then(data => res.json(data.text))
  .catch(err => res.status(400).json('unable to work with API'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));