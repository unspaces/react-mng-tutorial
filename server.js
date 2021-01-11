const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '엄세용',
      'birthday': '850409',
      'gender': '남자',
      'job': 'CEO'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '심수현',
      'birthday': '870210',
      'gender': '여자',
      'job': '화가'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '홍성학',
      'birthday': '851210',
      'gender': '남자',
      'job': '자산설계사'
    }
    ]);  
});

app.listen(port, () => console.log(`Listening on port ${port}`));