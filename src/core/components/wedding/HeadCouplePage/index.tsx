import React from 'react';
import type { CoupleData } from '@core/types';

interface Props {
  data: CoupleData;
}

const HeadCouplePage: React.FC<Props> = ({ data }) => {
  return (
      
       <header className="header">
        <img src={data.imageUrl} alt="Header Background" className="header-img" />
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </header>

    );
};

export default HeadCouplePage;