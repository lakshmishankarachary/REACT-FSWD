import React from "react"
class Hero extends React.Component{
    hero_Name = "RajiKanth";
    hero_Image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fonlinerajinifc&psig=AOvVaw3DAdHWMf25DcDGQPyN6zDT&ust=1648535443697000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMi2xaCX6PYCFQAAAAAdAAAAABAD"
        render(){
        return(
        <div className="container mt-5">
         <div className="row">
             <div className="col-md-4">
                  <div className="card">
                     <div className="card-header">
                     <img src={this.hero_Image} alt="Allu Arjun"/>
                     </div>
                     <div className="card-body">
                     <h1>{this.hero_Name}</h1>

                     </div>
                  </div>
             </div>
             <div className="col-md-4">
                  <div className="card">
                     <div className="card-header">
                     <img src={this.hero_Image} alt=" "/>
                     </div>
                     <div className="card-body">
                     <h1>{this.hero_Name}</h1>

                     </div>
                  </div>
             </div>
             <div className="col-md-4">
                  <div className="card">
                     <div className="card-header">
                     <img src={this.hero_Image} alt=""/>
                     </div>
                     <div className="card-body">
                     <h1>{this.hero_Name}</h1>

                     </div>
                  </div>
             </div>
         </div>
        </div>
        )     
}
}
export default Hero