import React from "react";


class TableDisplay extends React.Component{
 render(){
    return (
		<div>
			<table class="table table-striped">
           
            <thead>
                <tr>
               
                    <th>Place </th>                    
                    <th>Temprature(Faren Heat)</th>
                    <th>Summary</th>
                    <th>DewPoint(degree Farenheat)</th>
                     <th>Humidity(cubic meter)</th>
                      <th>Pressure(Pascal)</th>
                       <th>WindSpeed(KM/hr)</th>
                        <th>UvIndex(mW/cm2)</th>
                         <th>Visibility(kM)</th>
                          <th>Ozone(Dobson)</th>                         
                            
                    <th>Get Summary</th>                    
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td id="location" value="1" >Campbell, CA</td>                       
                        <td><p id="temp1" ></p></td>
                        <td><p id="summary1" ></p></td>
                        <td><p id="dewPoint1" ></p></td>
                        <td><p id="humidity1" ></p></td>
                        <td><p id="pressure1" ></p></td>
                        <td><p id="windSpeed1" ></p></td>
                        <td><p id="uvIndex1" ></p></td>
                        <td><p id="visibility1" ></p></td>
                        <td><p id="ozone1" ></p></td>
                        
                        
                        <td><button class="btn btn-warning" id="btn1" value="1" >Get Summary</button></td>
                        
                    </tr>                    
                    <tr>
                        <td id="3">Omaha, NE</td>                       
                        <td> <p id="temp2" ></p></td>
                        <td><p id="summary2" ></p></td>
                        <td><p id="dewPoint2" ></p></td>
                        <td><p id="humidity2" ></p></td>
                        <td><p id="pressure2" ></p></td>
                        <td><p id="windSpeed2" ></p></td>
                        <td><p id="uvIndex2" ></p></td>
                        <td><p id="visibility2" ></p></td>
                        <td><p id="ozone2" ></p></td>
                        <td><button class="btn btn-warning" id="btn2" value="2">Get Summary</button></td>
                        
                    </tr>
                    <tr>
                        <td id="4">Austin, TX</td>                       
                        <td> <p id="temp3" ></p></td>                        
                        <td><p id="summary3" ></p></td>
                        <td><p id="dewPoint3" ></p></td>
                        <td><p id="humidity3" ></p></td>
                        <td><p id="pressure3" ></p></td>
                        <td><p id="windSpeed3" ></p></td>
                        <td><p id="uvIndex3" ></p></td>
                        <td><p id="visibility3" ></p></td>
                        <td><p id="ozone3" ></p></td>
                        <td><button class="btn btn-warning" id="btn3" value="3">Get Summary</button></td>                        
                    </tr>
                    <tr>
                        <td id="5">Niseko, Japan</td>
                       
                        <td> <p id="temp4" ></p></td>                        
                        <td><p id="summary4" ></p></td>
                        <td><p id="dewPoint4" ></p></td>
                        <td><p id="humidity4" ></p></td>
                        <td><p id="pressure4" ></p></td>
                        <td><p id="windSpeed4" ></p></td>
                        <td><p id="uvIndex4" ></p></td>
                        <td><p id="visibility4" ></p></td>
                        <td><p id="ozone4" ></p></td>
                        <td><button class="btn btn-warning" id="btn4" value="4">Get Summary</button></td>                        
                    </tr>
                    <tr>
                        <td >Nara, Japan </td>
                        <td> <p id="temp5" ></p></td>                        
                        <td><p id="summary5" ></p></td>
                        <td><p id="dewPoint5" ></p></td>
                        <td><p id="humidity5" ></p></td>
                        <td><p id="pressure5" ></p></td>
                        <td><p id="windSpeed5" ></p></td>
                        <td><p id="uvIndex5" ></p></td>
                        <td><p id="visibility5" ></p></td>
                        <td><p id="ozone5" ></p></td>
                        <td><button class="btn btn-warning" id="btn5" value="5">Get Summary</button></td>
                        
                    </tr>
                    <tr>
                        <td>Jakarta, Indonesia </td>                        
                        <td> <p id="temp6" ></p></td>                        
                        <td><p id="summary6" ></p></td>
                        <td><p id="dewPoint6" ></p></td>
                        <td><p id="humidity6" ></p></td>
                        <td><p id="pressure6" ></p></td>
                        <td><p id="windSpeed6" ></p></td>
                        <td><p id="uvIndex6" ></p></td>
                        <td><p id="visibility6" ></p></td>
                        <td><p id="ozone6" ></p></td>
                        <td><button class="btn btn-warning" id="btn6" value="6">Get Summary</button></td>
                       
                    </tr>
            </tbody>
        </table>   

		</div>
		);

}

};

export default TableDisplay;