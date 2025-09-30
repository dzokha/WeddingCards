import React from 'react';
import type { CoupleData } from '@core/types';

interface Props {
  data: CoupleData;
}

const BrideGroom: React.FC<Props> = ({ data }) => {
  return (
    <section className="bride-groom-section">
      <div className="bride-groom-card">
        <img src={data.groomImage} alt={data.groomName} className="bride-groom-img" />
        <h3>{data.groomFullName}</h3>
        <p className="role">{data.groomRole}</p>
      </div>
      <div className="bride-groom-card">
        <img src={data.brideImage} alt={data.brideName} className="bride-groom-img" />
        <h3>{data.brideFullName}</h3>
        <p className="role">{data.brideRole}</p>
      </div>
    </section>
  );
};

export default BrideGroom;
