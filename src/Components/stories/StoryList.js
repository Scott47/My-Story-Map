// import React, { Component } from "react";
// import { Scene } from "@esri/react-arcgis";

// class StoryList extends Component {
//   render() {
//     return (
//       <section className="stories">
//         {this.props.userStories.map(story => (
//           <div key={story.id} className="card card--stories">
//             <h5>{story.name}</h5>
//             {
//             this.props.basemaps.filter(basemap => basemap.id === story.basemapId).map(basemap => (
//             <Scene
//               style={{ width: "100vw", height: "100vh" }}
//               key={story.basemapId}
//               mapProperties={{ basemap: basemap.name }}
//               viewProperties={{
//                 center: [ -86.767960, 36.174465 ],
//                 zoom: 12
//             }}
//             />
//             ))
//             }
//           </div>
//         ))}
//       </section>
//     );
//   }
// }


// {
//     this.props.candyTypes
//     .find(candyType => candyType.id === candy.candyTypeId)
//     .name
//   }

// export default StoryList;
// export default class EmployeeList extends Component {
//     render () {
//       return (
//         <section className="employees">
//           {this.props.employees.map(employee =>
//               <div key={employee.id} className="card card--employee">

//                       <h5>{employee.name}</h5>
//                       <a href="#"
//                       onClick={() => this.props.deleteEmployee(employee.id)}
//                       className="card-link">Delete</a>
//                   </div>
//                       <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
//                   <div className="animals--caretaker">
//               {
//               this.props.animals
//                   .filter(anml => anml.employeeId === employee.id)
//                   .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
//               }
//               </div>

//               </div>
//               </div>
//                   )
//               }
//           </section>
//           )
//       }
//   }
