import React from 'react';

import AudioTool from './AudioTool';

const ClappingPage = (props) => {
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
    	<h1
    		style={{
    			fontWeight: 'bold',
    			marginBottom: 16,
    			lineHeight: '1em',
    			textAlign: 'center',
    			letterSpacing: 2,
    		}}
    	>
    		clapping.fail
		</h1>
    	<AudioTool />
    </main>
  );
};

export default ClappingPage;