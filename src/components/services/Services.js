import React from 'react';
import Wrapper from './services-style';
import { services } from '../../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur nobis distinctio aliquid iusto vel, amet debitis porro
            incidunt iste reprehenderit?
          </p>
        </article>
        <div className='services-center'>
          {services.map((services) => {
            const { id, icon, title, text } = services;
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
