import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FoodService from '../foodServices/FoodService';
import Slider from './Slider';
import './food.css';


class customerviewcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            food: [],
            foodcategoryid: '',
            foodcategory: '',
            foodname: '',
            cost: '',
            description: '',
            fimage: ''
            

        }
       
        this.viewfoodpackages = this.viewfoodpackages.bind(this);
   
    }

    componentDidMount(){
        FoodService.getFood().then((res) => {

            this.setState({ food: res.data});


        });
    }

    viewfoodpackages(id){
       
        this.props.history.push(`/chinese/${id}`);
    }


    


    render() {
        return (

          
        <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <center>
                <div className="text-center">
                <h1 style={{fontFamily:"Sofia"}}> EVENTO365 FOOD SERVICE </h1>

                <div className="card-body">
                <Slider/>
                </div>
              
              <div >
                <Grid container >
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "150px", marginBottom: "10px" , marginTop: "10px" ,width: "400px" , hight:"350px"}} >
                        <Paper > 
                            <img style={{width: "100%"}} src="../images/chinese.jpg"></img>  
                            <h1>CHINESE</h1>  
                            <button style={{marginLeft: "10px", marginBottom: "10px" }} className="btn btn-success" onClick= {() => this.viewfoodpackages("01-Chinese")}  > VIEW </button>
                         </Paper>
                    </Grid>
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "10px" , marginBottom: "10px" , marginTop: "10px" , width: "400px" , hight:"350px"}} >
                        <Paper > 
                             <img style={{width: "100%"}} src="../images/indian.jpg"></img> 
                             <h1>INDIAN</h1> 
                             <button style={{marginLeft: "10px", marginBottom: "10px"}} className="btn btn-success" onClick= {() => this.viewfoodpackages("03-Indian")} > VIEW</button> 
                         </Paper>
                    </Grid>
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "10px" , marginBottom: "10px" , marginTop: "10px" , width: "400px" , hight:"350px"}}>
                        <Paper > 
                             <img style={{width: "100%"}} src="../images/italian.jpg"></img> 
                             <h1>ITALIAN</h1> 
                             <button style={{marginLeft: "10px", marginBottom: "10px"}} className="btn btn-success" onClick= {() => this.viewfoodpackages("02-Italian")} > VIEW</button> 
                        </Paper>
                    </Grid>
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "150px" , marginBottom: "10px" , marginTop: "10px" , width: "400px" , hight:"350px"}}>
                        <Paper > 
                        <img style={{width: "100%"}} src="../images/thai.jpg"></img>
                        <h1>THAI</h1> 
                        <button style={{marginLeft: "10px", marginBottom: "10px"}} className="btn btn-success" onClick= {() => this.viewfoodpackages("05-Thai")} > VIEW</button> 
                         </Paper>
                    </Grid>
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "10px" , marginBottom: "10px" , marginTop: "10px" , width: "400px" , hight:"350px"}}>
                        <Paper > 
                        <img style={{width: "100%"}} src="../images/lankan.jpg"></img>
                        <h1>SRI LANKAN</h1> 
                        <button style={{marginLeft: "10px", marginBottom: "10px"}} className="btn btn-success" onClick= {() => this.viewfoodpackages("04-Sri lank")} > VIEW</button> 
                         </Paper>
                    </Grid>
                    <Grid className="foodGrid" items xs={12} md={6} lg={3} style={{marginLeft: "10px" , marginBottom: "10px" , marginTop: "10px" , width: "400px" , hight:"350px"}}>
                        <Paper > 
                        <img style={{width: "100%"}} src="../images/royal.jpg"></img>
                        <h1>ROYAL</h1> 
                        <button style={{marginLeft: "10px" , marginBottom: "10px"}} className="btn btn-success" onClick= {() => this.viewfoodpackages("06-Royal")} > VIEW</button> 
                         </Paper>
                    </Grid>
                </Grid>
                </div>
                </div>
                </center>
            </div>
            
           
        );
    }
}

export default customerviewcomponent;