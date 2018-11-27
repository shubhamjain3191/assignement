import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    var { data } = props;
    this.state = { output: data }
  }
  deleterow(index) {
    this.state.output.splice(index, 1)
    this.setState({ output: this.state.output });
  }

  render() {
    var { format, data } = this.props;

    let output = <table className="table">
      <thead>
        <tr>{
          format.map((value) =>
            <th key={value.key}>
              {value["key"]}
            </th>
          )
        }
          <th>Delete</th>
        </tr>
      </thead>
      {
        data.map((val, index) =>
          <tbody key={index}>
            <tr>
              {
                format.map((value) => value["align"] === "right" ?
                  <td key={value.key} id="right">
                    {val[value.key]}
                  </td> : <td key={value.key}>
                    {val[value.key]}
                  </td>
                )
              }
              <td key="button">
                <center>
                  <input type="button" value="delete" onClick={() => this.deleterow(index)} />
                </center>
              </td>
            </tr>
          </tbody>
        )
      }
    </table>
    return (output);
  }
}

export default Table;
