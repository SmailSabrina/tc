import React from "react"

import img from "./logo-og.png"
import Card from "../Components/Card"

class Albums extends React.Component{
    render(){
        return(
           <main>
               <section>
                   <div className="container">
                       <div className="row">
                           <Card title="first album" poster="malah" path={img}/>
                           <Card title="second album" poster="sabrina" path={img}/>
                       </div>
                   </div>
               </section>
           </main>
        )
    }
}

export default Albums