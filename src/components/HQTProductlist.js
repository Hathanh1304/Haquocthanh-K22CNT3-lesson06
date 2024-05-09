import React, { Component } from 'react'

 class HQTProductlist extends Component {
  render() {
    let {renderProducts}= this.props;
    console.log("Products",renderProducts);
    let fnStatus=(param)=>{
        if(param===1){
            return ' Active';
        }
        return 'NonActive';
    }
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key = {index}>
                    <td> {item.id}</td>
                    <td> {item.title}</td>
                    {/*<td> {item.status==1? 'Actave':'NonActive'}</td> */}
                    <td>
                        {fnStatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2> Danh sach san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Title</th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                {elementProduct}
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
export default HQTProductlist;