import React from 'react';

interface Props {}

const Rank = (props: Props) => {
  return (
    <div>
      <div className={`white f3`}>{`Name, your current rank is`}</div>
      <div className={`white f1`}>{`#5`}</div>
    </div>
  );
};

export default Rank;