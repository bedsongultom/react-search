import React, { Component, Fragment } from "react";
import itemData from "./ItemData";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemData: itemData,
            keywords: "",
        }
        this.onChangeKeywords = this.onChangeKeywords.bind(this);
    }
    onChangeKeywords = (e)=>{    
        let keywords = e.target.value;
        e.preventDefault();
        console.log({LOG: keywords})
        this.setState({ keywords: keywords});
    }

    render(){
        const { itemData, keywords } = this.state;
        let no = 1;

        return(
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row py-5">
                        <form> 
                            <div className="input-group"> 
                                <div className="input-group mb-3">                   
                                    <span className="input-group-text text-dark ">Keywords </span>                    
                                    <input type="search" className="form-control border-secondary rounded-0" 
                                        placeholder="Please Enter Here ..." value={keywords}  
                                        name="keywords" 
                                        onChange={(e)=>this.onChangeKeywords(e)}                                        
                                    />
                                </div>
                            </div>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">No</th>
                                        <th className="text-center">Id</th>
                                        <th className="text-center">Item Name</th>
                                        <th className="text-center">Image</th>
                                        <th className="text-center">Price</th>
                                    </tr>
                                </thead>    
                                    <tbody className="text-center align-middle"> 
                                        {  itemData.length ===0 ? 
                                        <tr><td colSpan={5}>Items Data Not Found</td></tr> 
                                        : 
                                        // eslint-disable-next-line array-callback-return
                                        itemData.filter( (data) =>{
                                            if(this.state.keywords === ""){
                                                return data;                                                
                                            }else{
                                           
                                            if(data.item_name.toLowerCase().includes(this.state.keywords.toLowerCase())
                                                || data.id.includes(this.state.keywords)){
                                                    return data;
                                                }
                                            }
                                        }).map((data,index) =>{
                                            return(
                                            <tr key={index}>    
                                                <td>{no++}</td>
                                                <td>{data.id}</td>
                                                <td>{data.item_name}</td>
                                                <td><img src={data.image} width={60} height={60} alt="img"/></td>
                                                <td>{data.price}</td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>    
                            </table>
                        </form>    
                        </div>    
                    </div>    
                </div>
            </Fragment>
        )
    }
}
export default Home;