import React, { Component } from 'react';
import './style_Home.css';
import './style_Home_Text.css';
import './style.css';
import './index_Home_Text.js';


export class Home extends Component {

  render() {
    

      return (
   <div>
  <div className="face">
  <div className="ears"></div>
  <div className="face__wrap">
    <div className="eyes"></div>
    <div className="nose">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="12" viewBox="0 0 29 12" version="1"><g style="fill-rule:evenodd;fill:none;stroke-linecap:round"><g style="stroke-width:4;"><path d="M2.4 2.5C4.6 6.6 9.1 9.4 14.4 9.4L14.4 9.4C19.8 9.4 24.3 6.5 26.4 2.4"/></g></g></svg>
    </div>
    <div className="mouth">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="8" viewBox="0 0 44 8" version="1"><g style="fill-rule:evenodd;fill:none;stroke-linecap:round"><g style="stroke-width:4;"><path d="M2.2 2.2C5.7 4 13.3 5.2 22.1 5.2L22.1 5.2C31 5.2 38.7 3.9 42.2 2.2"/></g></g></svg>
    </div>
  </div>
   <span className="todo__buttons">
            <center>

            <button type="button" className="btn btn-primary">
            <a href="index_List.html" style="text-decoration:none" target="_top"><font color="white">ลิสต์บุญเลย</font>
              <i className="fa fa-book"></i></a>
            </button></center>
    </span>
</div>

  <div>
    <h1 id="messageLabel">ขออนุโมทนาบุญกับญาติโยมทุกท่านที่ร่วมลิสต์บุญ</h1>

  
    <script src="js/index_Home_Text.js"></script>
     </div> 

     </div>
      );
  }
}



