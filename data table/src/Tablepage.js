import React from 'react';
import Modals from './Modal';
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button';
import Editform from './Editform';

class Tablepage extends React.Component {
    constructor(props) {
        super(props);
        let { header } = props;
        this.state = {
            headerData: header,
            rowsData: [],
            OpenModal: false,
            id: 0,
            dataTObeEditid: 0,
        }
    }
    addTotable = (dataToSave) => {
        let counter = this.state.id;
        this.setState({ id: ++counter });
        let list = [...this.state.rowsData];
        let copyDataToSave = { ...dataToSave };
        copyDataToSave["id"] = counter;
        list.push(copyDataToSave);
        this.setState({ rowsData: [...list] })

    }
    openEditModal = (event) => {
        this.setState({ OpenModal: true })
        this.setState({ dataTObeEditid: event.target.id })
    }
    closeEditModal = () => {
        this.setState({ OpenModal: false })
    }
    edittable = (dataTobeEdit) => {
        let { rowsData, dataTObeEditid } = this.state;
        let listTObeEdit = [...rowsData];
        listTObeEdit[dataTObeEditid] = dataTobeEdit;
        this.setState({ rowsData: [...listTObeEdit] })
    }
    deleteRow = (event) => {
        let listforDeletion = [...this.state.rowsData];
        listforDeletion.splice(event.target.id, 1);
        this.setState({ rowsData: [...listforDeletion] });

    }
    getRow = (object) => {
        let { headerData } = this.state;
        let row = [<td key={object["id"]}>{object["id"]}</td>, ...headerData.map(key => <td key={key}>{object[key]}</td>)];
        return row;
    }
    getAllRows = () => {
        let { rowsData } = this.state;
        let allRows = rowsData.map((array, val) => {
            return (
                <tr key={val}>
                    {this.getRow(array)}
                    <td>
                        <Button variant="primary" id={val} onClick={this.openEditModal}>Edit</Button> &nbsp;&nbsp;
                        <Button variant="secondary" id={val} onClick={this.deleteRow}>Delete</Button>
                    </td>
                </tr>
            );
        })
        return allRows;
    }
    render() {
        let { headerData, rowsData, OpenModal } = this.state;
        return (
            <>
                {
                    this.state.OpenModal &&
                    <Editform
                        show={OpenModal} datakeys={headerData} close={this.closeEditModal}
                        data={rowsData[this.state.dataTObeEditid]} edit={this.edittable}
                    />
                }
                <Modals fields={headerData} add={this.addTotable} key={this.state.id} />
                <Table striped bordered hover style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>id</th>
                            {
                                headerData.map(
                                    (value) => <th key={value}>{value}</th>
                                )
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getAllRows()}
                    </tbody>
                </Table>
            </>
        )
    }
}
export default Tablepage;




// import React from 'react';
// import Input from './Input'
// let errors={
//     name:{
//         regex:/^[A-Za-z]{4,}$/,
//         statement:"Name must contain atleast 4 character"
//     },
//     email:{
//         regex:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
//         statement:"Please enter valid email address"
//     },
//     number:{
//         regex:/^[0-9]{10}$/,
//         statement:"Please enter correct mobile no."
//     }
// }
// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =
//             {
//                 name: 'shubham',
//                 email: 'abc@as.com',
//                 number: "1234567890",
//                 error: {
//                     name :'',
//                     email:'',
//                     number:''
//                 }
//             }
//         // this.handlesave=this.handlesave.bind(this);
//     }
//     handlesave = (event) => {
//         let key= errors[event.target.id];
//         let reg=key.regex;
//         let stmt = this.state.error ;
//         stmt[event.target.id]="";
//         let val=event.target.value;
//         if(!reg.test(val)){ 
//             stmt[event.target.id] = key.statement;
//             this.setState({[event.target.id]: event.target.value, error: stmt})
//         }
//         else{
//             stmt[event.target.id] = "";
//             this.setState({[event.target.id]: event.target.value, error: stmt})
//         }

//     }
//     render() {
//         return (
//             <div>
//                 <Input id="name" value={this.state.name} onChange={this.handlesave}  err={this.state.error.name} />
//                 <Input id="email" value={this.state.email} onChange={this.handlesave} err={this.state.error.email}  />
//                 <Input id="number" value={this.state.number} onChange={this.handlesave} err={this.state.error.number}  />
//             </div>

//         )   
//     }
// }
// export default Table;
