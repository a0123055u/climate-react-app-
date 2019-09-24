import React from "react";


class FileUpload extends React.Component{
// state = {
//       file: null,
//       handleChange : this.handleChange.bind(this)
//     }

    constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
    
 handleChange(event) {
 	console.log(event.target.files[0])
    this.setState({

      file: URL.createObjectURL(event.target.files[0])
    })
  }

render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img alt="background" src={this.state.file} />
      </div>
    );
  }
};



export default FileUpload;