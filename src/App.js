import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
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
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;