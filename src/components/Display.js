import React, { useState } from 'react';

function Display(props) {
  function handleDelete(id){
    props.Delete(id)

  }
  
  return (
    <div className="container  mb-2 ml-2">
     <div className="row">
       {props.data.map(item=>(
         <div className="col-sm-6 mt-4 mb-4">
           <div className="card">
             <div className="card-body">
               <h6 key={item.FirstName}>FirstName:{item.FirstName}</h6>
               <h6 key={item.LastName}>LastName:{item.LastName}</h6>
               <h6 key={item.ID}>ID:{item.IDNumber}</h6>
               <h6 key={item.Address}>Address:{item.Address}</h6>
               <h6 key={item.PhoneNumber}>PhoneNumber:{item.PhoneNumber}</h6>
               <h6 key={item.Temperature}>Temperature:{item.Temperature}</h6>
               <h6 key={item.radio}>Have you been diagnosed of Covid-19?:{item.radio}</h6>
               <h6 key={item.radio2}>Have you been incontact with someone who tasted positive for Covid-19?:{item.radio2}</h6>
               <h6 key={item.radio3}> Any Covid Symptoms?:{item.radio3}</h6>
               <button
               onClick={()=>handleDelete(item.id)}
                type="button" 
                className="btn btn-success ml-10"  
               >Delete</button>
             </div>
           </div>
         </div>
       ))}
     </div>
    </div>
  );
}
export default Display;
