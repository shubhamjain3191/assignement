import React from 'react';

class Input extends React.Component {
    render() {
        const { id,value,onChange,err}= this.props;
        let css;
        if(err===""){
             css=' 1px solid black';
        }
        else{
             css='1px solid red';
        }
        return (<>
        {id}:
        <div>
        <input type="text" id={id} value={value} onChange={onChange} style={{border : css}}/>
        </div>
    
        <div>
           {err}
        </div>
        </>
        )
        
        
    }
}
export default Input;