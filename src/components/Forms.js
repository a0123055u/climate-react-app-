import React from "react";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Forms extends React.Component{
 render(){
    return (
    	
		<form onSubmit = {this.props.getWeather} >
		<div class="form-group">
			 <label for="City">City</label>
			<input type="text" name="city" placeholder ="city..." class="form-control"/>
			</div>
			<div class="form-group">
			<label for="Country">Country</label>
			<input type="text" name="country" placeholder ="Country..." class="form-control"/>
			
			</div>
			<button class="btn btn-primary">Get Weather</button>
		</form>
		
		);

}

};

export default Forms;