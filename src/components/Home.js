import React from 'react';
import '../App.css';
import Modal from 'react-modal';
var test = require('./reducer/TestJSON.json');
class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            showModal:false,
            dataSource:test.members,
            details:[],
            name:"",
        }
    }

    handleClick(id){
        var data=this.state.dataSource;
        console.log(id);
        this.setState({
            showModal:true,
        }) ;  
       // eslint-disable-next-line
        data.map((data)=>{
            if(id===data.id){
                this.setState({
                    name:data.real_name,
                    details:data.activity_periods,
                });
            }
        })
    
    }
    onClose(){
        this.setState({
            showModal:false,
        })
    }
    detailShow(){
        // eslint-disable-next-line
        var detail=this.state.details;
        var name = this.state.name;
        return(
            <div className='modal' onClick={()=>this.onClose()}>
                <header className='App-header'>{name}</header>
                <div className='container'>
                    {detail.map((detail)=>
                    <div className='App-link'>
                       <span><h3>Start-time</h3> {detail.start_time}</span><br/>
                       <span><h3>End-time</h3> {detail.end_time}</span>
                    </div>
                    )}
                    
                </div>
            </div>
        )
    }

    render(){
        var data=this.state.dataSource;
        return(
            <div className='App'>   
            <header className='App-header'>Home Page</header>
                <div className='container'>
                <h2 className='text'>User Details</h2>
                    { data.map((data,key)=>
                            <div className='App-link' key={key} onClick={()=>this.handleClick(data.id)}> 
                                <span className='text' value={data.id}>{data.real_name} </span><br/>
                                <span value={data.id}>{data.tz} </span>
                            </div>    
                    )}     
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    transparent
                    animationType="slide"
                    onRequestClose={()=>{this.onClose()}}
                >
                    <div>
                        <span>
                            {this.detailShow()}
                        </span>   
                    </div>
                </Modal>    
            </div>  
        );    
    }
  
}
export default Home;