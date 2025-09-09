import React from 'react';
import { Badge } from './ui/badge';
const LatestJobCards = () => {
  return (
    <div className=''>
      <div>
        <h1>Company Name</h1>
        <p>India</p>
      </div>
      <div>
        <h1>Job Title</h1>
        <p>Job description</p>
      </div>
      <div>
        <Badge>Positions</Badge>
      </div>
    </div>
  );
};
export default LatestJobCards;