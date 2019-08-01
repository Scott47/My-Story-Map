import React, { Component } from 'react'


class StoryList extends Component {
    render() {
        return (
            <section className="stories">
            {
                this.props.stories.map(stories =>
                    <div key={stories.id} className="card card--stories">
                        <h5>{stories.name}</h5>
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoryList
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