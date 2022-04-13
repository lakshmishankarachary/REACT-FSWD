let Actress=()=>{
   let act_name="allu"
   let act_img="https://i.pinimg.com/originals/bd/4d/d4/bd4dd48f0ea32bac0ba4e89ae652c262.jpg"
   return (
   <div className="container mt-5">
       <div className="row">
           <div className="col-md-4">
               <div className="card">
                <img src={act_img} alt=""/>
               </div>
                 <div className="card-body">
                     <h1>{act_name}</h1>
                 </div>
           </div>
           <div className="col-md-4">
               <div className="card">
                <img src={act_img} alt=""/>
               </div>
                 <div className="card-body">
                     <h1>{act_name}</h1>
                 </div>
           </div>
           <div className="col-md-4">
               <div className="card">
                <img src={act_img} alt=""/>
               </div>
                 <div className="card-body">
                     <h1>{act_name}</h1>
                 </div>
           </div>
       </div>
   </div>
   )
}
export default Actress