import React from 'react';
import Proptypes from 'prop-types';
import desireFormat from 'string-template';
import './Table.css'

const proptype = {
    number: Proptypes.number,
    upto: Proptypes.number
}
class Table extends React.Component {
    render() {
        let { number, upto, format } = this.props;
        return (
            Array.from({ length: upto }, (x, i) => i + 1).map(
                val => <div>
                    {desireFormat(format, {
                        number: number,
                        upto: val,
                        result: val * number
                    })}
                </div>)
        )
    }
}
Table.Proptypes = proptype;

export default Table;