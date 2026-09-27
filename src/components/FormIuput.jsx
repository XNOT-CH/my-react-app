import React from "react";
import { useState } from "react";

const FormIuput = () => {
  // js
  
  const [formData, setFormData] = useState({
    food: "",
    drink: ""
  });
  // const hdlonChange = (e) => {
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   setTitle(e.target.value)
  // }

  // const hdlonChange = (e) => {
  //   console.log(`ช่อง: ${e.target.name} | ค่า: ${e.target.value}`);
  // }

  const hdlonChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // jsx html + js
  return (
    <div>
      <p>อาหาร: {formData.food}</p>
      <p>เครื่องดื่ม: {formData.drink}</p>
      <form>
        <label> Food:</label>
        <input name='food' onChange={hdlonChange}/>

        <label> drink:</label>
        <input name='drink' onChange={hdlonChange}/>


      </form>
    </div>
  );
};

export default FormIuput;
