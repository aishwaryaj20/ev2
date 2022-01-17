import React, { useState } from "react";

import "./Recipe.css"
export const RF = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
 
  const [saveData, setSaveData] = useState([]);
  const opendata = (e) => {
   // alert("{e.currdata.title}")
}
  const submitForm = (e) => {
    e.preventDefault();
    const newdata = {
      title: title,
      ingredients: ingredients,
      time: time,
     
    };

    setSaveData([...saveData, newdata]);
    console.log(saveData);
  };

  return (
    <>


      <form action="" onSubmit={submitForm}>
        <div className="leftbox">
          <label forhtml="name">Enter Job Title</label>
          <br></br>

          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br></br>

          <label forhtml="ingredients">Enter Location</label>
          <br></br>

          <input
            type="text"
            name="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
          />

          <br></br>

          <label forhtml="time" className="time">Enter Duration</label>
          <br></br>

          <input
            type="number"
            name="time "
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />

          <br></br>


          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
      
        {saveData.map((currdata) => {
          return (
            <div id="rightbox">
            <div className="box">
              <h1>JOBS</h1>
              <p class="show"> JOB Title  : {currdata.title}</p>
              <p class="show"> JOB Location : {currdata.ingredients}</p>
              <p class="show"> Time Duration : {currdata.time}</p>
           
       <br></br>
           <button  onClick={opendata} >View</button>
       
    </div>  
</div>
          );
        })
        
        }
      </div>

    </>
  );
};
export default RF;
