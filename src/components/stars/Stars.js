import React from 'react';
import Wrapper from './stars-style';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  console.log(stars, reviews);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  console.log(tempStars);
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;
