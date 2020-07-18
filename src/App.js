import React from 'react';
import PropTypes from 'prop-types'
function Food({name, picture, rating}){
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5</h4>
      <img src={picture} width={300} alt={name}/>
    </div>
  );
}

const foodILike = [ 
  { 
  'id':1,
  'name':'kimchi',
  'image': 'https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg',
  'rating': 3,
  },
  {
    'id':2,
    'name':'samgyeopsal',
    'image': 'https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1',
    'rating': 1,
  },
  {
    'id':3,
    'name': 'bibimbap',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg',
    'rating': 1,
  },
  {
    'id':4,
    'name': 'donkatsu',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tonkatsu_by_ayustety_in_Tokyo.jpg',
    'rating': 1,
  },
  { 
    'id':5,
    'name': 'kimbap',
    'image': 'https://media-cdn.tripadvisor.com/media/photo-s/0a/b5/bb/08/tuna-kimbap-starter.jpg',
    'rating': 1,
  }
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish=> (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))
      }
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
export default App;
