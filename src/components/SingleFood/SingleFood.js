import React from 'react';

const SingleFood = (props) => {
  const { title, sub_title, price } = props.food;
  return <div>{title}</div>;
};

export default SingleFood;
