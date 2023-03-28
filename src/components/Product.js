import React,{Component} from "react";

class Product extends Component{
    state={
        id:1,
        name:"apple",
        qty:40,
        price:200,
        product:{id:2,name:'Mango',qty:30,price:300}
    };
    render(){
        return(
            <div className='container' >
                <div className="card" style={{"margin-top":"30px"}}>
                    <div className="card-header" style={{"background-color":"lightgreen"}}>
                        <h1 style={{"color":"blue","font-family":"Roboto","font-weight":"bold","font-size":"34px"}}>Create Product</h1>
                    </div>
                    <div className="card-body" style={{"background-color":"hotpink","font-family":"Roboto","font-weight":"bold","font-size":"20px"}}>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputProduct" class="form-label">
                                    Product ID
                                </label>
                                <input style={{"text-align":"center","background-color":"cyan","font-family":"Roboto","font-weight":"bold","font-size":"20px"}}  type="text" class="form-control" id="productId" value={this.state.product.id} onChange={(e)=>this.setState({product:{id:e.target.value}})} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputProduct" class="form-label">
                                    Product Name
                                </label>
                                <input style={{"text-align":"center","background-color":"cyan","font-family":"Roboto","font-weight":"bold","font-size":"20px"}}  type="text" class="form-control" id="productName" value={this.state.product.name} onChange={(e)=>this.setState({product:{name:e.target.value}})} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputProduct" class="form-label">
                                    Product Quantity
                                </label>
                                <input style={{"text-align":"center","background-color":"cyan","font-family":"Roboto","font-weight":"bold","font-size":"20px"}}  type="text" class="form-control" id="productQuantity" value={this.state.product.qty} onChange={(e)=>this.setState({product:{qty:e.target.value}})} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputProduct" class="form-label">
                                    Product Price
                                </label>
                                <input style={{"text-align":"center","background-color":"cyan","font-family":"Roboto","font-weight":"bold","font-size":"20px"}} type="text" class="form-control" id="productPrice" value={this.state.product.price} onChange={(e)=>this.setState({product:{price:e.target.value}})} />
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product