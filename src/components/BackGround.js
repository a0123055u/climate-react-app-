


import React from "react";
import t1 from '../t1.jpg'

class BackGround extends React.Component{
  render(){
    return (
    	<div>
    	{this.props.children}<img src={t1} />
    	</div>
    	)
  }  
};

export default BackGround;