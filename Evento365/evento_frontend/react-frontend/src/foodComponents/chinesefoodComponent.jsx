import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';

 class chinesefoodComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            
            fid: this.props.match.params.id,
            food:[]
        }

        this.addtobookingfood = this.addtobookingfood.bind(this);
        
    }


    componentDidMount(){
         FoodService.getFoodpackages(this.state.fid).then((res) => {
            this.setState({ food: res.data});
            
        });


    }

    viewFood(foodid){
        this.props.history.push(`/view-food/${foodid}`);
    }
    addtobookingfood(foodid){
        this.props.history.push(`/cus-book-food/${foodid}`);
        
    }

    render() {
        
        return (
            <div className="container formDivgg"
                    style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/22/18/riY3Ba.jpg')" }} >
                
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                
                <div className="text-center">
                <h2 style={{marginBottom: "30px" , marginTop: "10px" }} className="test-center">FOOD PACKAGES</h2>
                </div>
                <div className = "row">
                <div className="foodtable">
                    <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{textAlign:"center", fontSize:"20px",width:"10%"}}>Food package Name </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food Types </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"20%"}}>Description</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Package Cost</th>
                                <th style={{textAlign:"center",fontSize:"20px" ,width:"20%"}}>Image</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"18%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.food.map(
                                    food =>
                                   <tr  key ={food.foodid}>
                                       <td style={{fontSize:"17px"}}> {food.foodcategory} </td>
                                       <td style={{fontSize:"17px"}}> {food.foodname} </td>
                                       <td style={{fontSize:"17px"}}> {food.description} </td>
                                       <td style={{fontSize:"17px"}}> {food.cost} </td>
                                       <td style={{fontSize:"17px"}}> <img style={{width:"100%", height:"100%"}} src={food.fimage}></img> </td>
                                       <td style={{fontSize:"17px"}}>
                                           <button  onClick = { () => this.viewFood(food.foodid)} className="btn btn-info">View </button>
                                           <button style={{marginLeft: "10px"}} className="btn btn-success" onClick = { () => this.addtobookingfood(food.foodid)} > Add to booking</button>
                                       </td>
                                   </tr> 
                                )
                            }
                        </tbody>

                    </table>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default chinesefoodComponent;