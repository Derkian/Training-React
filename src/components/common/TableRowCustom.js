import React from 'react';
import TableElementCustom from './TableElementCustom';
import PropTypes from 'prop-types';

/**
 * Custom demo TableRow
 * @param {array: string} columns - Items array
 */
class TableRowCustom extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.columns.length !== nextProps.columns.length;
  }

  render() {    
    return (
      <tr>
        {          
          Object.values(this.props.columns).map((item, i) => {            
            return (
              <TableElementCustom key={i} itemName={item}/>
            );
          })          
        }
      </tr>
    );
  }
}

TableRowCustom.propTypes = {
  columns: PropTypes.array.isRequired
};

export default TableRowCustom;
