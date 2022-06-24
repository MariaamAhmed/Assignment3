import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore System tron Technologies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpg'
              text='Edge Solutions'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/image3.jpg'
              text='APEX cloud services'
              label='Cloud Services'
              path='/customer-service'
            />
            <CardItem
              src='images/image4.jpg'
              text='Telecommunication solutions'
              label='Tele-services'
      
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
