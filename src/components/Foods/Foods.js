import React from 'react';
import { useParams } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';
import fakeData from './../../fakeData/index';

const Foods = () => {
  let { type } = useParams();
  const foods = fakeData.filter((item) => item.type === type);
  console.log(foods);
  return (
    <div>
      {foods.map((food) => (
        <SingleFood
          key={food.id}
          food={food}
          // handleAddCourse={handleAddCourse}
        ></SingleFood>
      ))}
    </div>
  );
};

export default Foods;
