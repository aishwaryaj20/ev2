import data from "./data.json";
import Jobs from "./components/Jobs";
import { useState } from "react";
import Header from "./components/Header";
import {RF}  from "./components/RF"


function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);



  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };



  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
   
      <div className="header">
      <h1 className="ti">JOB LISTING APPLICATION</h1></div>


      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
       
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      
      < RF />
    </div> 
  );
}

export default App;
