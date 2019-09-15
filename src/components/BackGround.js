


import React from "react";
import t1 from '../t1.jpg'

class BackGround extends React.Component{
  render(){
  	var style = {
      width: '20%'    
    };
    return (

    	<div> 
    	{this.props.children}<img src={t1} alt="background" class="thumbnail" style={style}/>

    	</div>
    	)
  }  
};

export default BackGround;