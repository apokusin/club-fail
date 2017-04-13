import React from 'react';

import Clapper from './Clapper';

const ClappingPage = () => {
  return (
    <main className="ClappingPage">
    	<div
    		style={{
    			width: '100%',
    			textAlign: 'center',
    			marginBottom: '0.75em',
    			marginTop: '1em',
    			fontSize: 100
    		}}
    	>🍍</div>

    	<Clapper />
    </main>
  );
};

export default ClappingPage;