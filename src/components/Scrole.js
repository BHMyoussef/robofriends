import React from 'react';

const Scrole=(props)=>{
	return(
		<div style={{overflowY:'scroll',border:'.5px solid #000',height:'800px'}}>
			{props.children}
		</div>
	);
			
}
export default Scrole;