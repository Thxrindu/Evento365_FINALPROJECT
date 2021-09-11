import React, { Component } from 'react';

import Fservice from '../eventPlannerServices/Fservice';


class FeedBackList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feedback: [],
            id:''

        }

        this.addfeedback = this.addfeedback.bind(this);
        this.deletefeedback=this.deletefeedback.bind(this);
        this.updatefeedback=this.updatefeedback.bind(this);
    }


    deletefeedback(id){if(window.confirm('Are you sure, want to delete the selected item?')) {

   Fservice.deleteFeedback(id).then(res=>{
      
  
        this.setState({feedback:this.state.feedback.filter(feedback=>feedback.id !==id)});
       });

    }
    }




    componentDidMount(){
        Fservice.getFeedbacks().then((res)=>{
           this.setState({feedback:res.data.filter(feedback=>feedback.cus_name ==1)})
           });
                      
        }


    //componentDidMount() {
       // Fservice.getFeedbacks().then((res) => {
           // this.setState({ feedback: res.data,
                
           // });
            //this.state.id = res.data.id;
      //  })

    //}

    addfeedback() {

        this.props.history.push('/create_feedback');

    }

    updatefeedback(id) {
        this.props.history.push(`update_feedback/${id}`);

    }

    render() {
        return (
            <div>
                <div className="background1"></div>
                <h2 className="text-center">Feedback</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addfeedback}>Give feedback</button>

                    <table className="table table-striped table-bordered">
                        <thead>


                            <tr>

                                <th> Event planner</th>
                                <th> Feedback</th>
                                <th> Action</th>

                            </tr>


                        </thead>




                        <tbody>


                            {
                                this.state.feedback.map(
                                    feedback =>

                                        <tr key={feedback.id}>
                                            <td>{feedback.eventplanner_name}</td>
                                            <td>{feedback.feedback}</td>
                                            <td>
                                                <button className="btn btn-info" onClick ={()=> this.updatefeedback(feedback.id)}>Update</button>
                                                <button style= {{marginLeft: "10px"}}className="btn btn-danger" onClick ={()=> this.deletefeedback(feedback.id)}>Delete</button>
                                            </td>
                                        </tr>
                                )


                            }





                        </tbody>





                    </table>




                </div>
            </div>
        );
    }
}

export default FeedBackList;