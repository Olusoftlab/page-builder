import React from "react"
import "../../node_modules/font-awesome/css/font-awesome.min.css"





const MyTile = ({ name, position }) => {


    if (name === "Navbar") {



        return < div style={{ border: "1px solid black", height: "20%" }} className="tiles" >


            <h1>{name}</h1>
            <div>
                <i className="fa fa-file-image-o" style={{ fontSize: "5em" }}     ></i>
            </div>

        </div >



    }
    else if (name === "Hero-section") {

        return < div style={{ border: "1px solid black", height: "60%" }} className="tiles" >


            <h1>{name}</h1>
            <div>
                <i className="fa fa-file-image-o" style={{ fontSize: "5em" }}   ></i>
            </div>

        </div >

    }

    else {

        return < div style={{ border: "1px solid black", height: "20%" }} className="tiles" >


            <h1>{name}</h1>
            <div>
                <i className="fa fa-file-image-o" style={{ fontSize: "5em" }} ></i>
            </div>

        </div >

    }






}

export default MyTile








// < div style = {{ border: "1px solid black", height: "20%" }} className = "tiles" >


//         <h1>{name}</h1>
//         <div>
//             <i className="fa fa-file-image-o" style={{ fontSize: "5em" }}     ></i>
//         </div>

//     </div >




// < div style = {{ border: "1px solid black", height: "60%" }} className = "tiles" >


//         <h1>{name}</h1>
//         <div>
//             <i className="fa fa-file-image-o" style={{ fontSize: "5em" }}   ></i>
//         </div>

//     </div >




// < div style = {{ border: "1px solid black", height: "20%" }} className = "tiles" >


//         <h1>{name}</h1>
//         <div>
//             <i className="fa fa-file-image-o" style={{ fontSize: "5em" }} ></i>
//         </div>

//     </div >