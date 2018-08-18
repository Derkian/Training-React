import React from 'react';
import TableRowCustom from './TableRowCustom';
import PropTypes from 'prop-types';

/**
 * Custom demo table
 * @param {array: { name: "" }} headColumns - Names of the columns
 * @param {array: { Objects }} bodyRows - Items array
 */
class TableCustom extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
          {
            this.props.headColumns !== undefined && this.props.headColumns.map((content, i) => {
              return (
              <th key={i}>{content.name}</th>
              );
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            this.props.bodyRows !== undefined && this.props.bodyRows.map((bodyRow, i) => {              
              return (                
                <TableRowCustom
                  key={i}
                  columns={bodyRow}
                />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

TableCustom.propTypes = {
  headColumns: PropTypes.array.isRequired,
  bodyRows: PropTypes.array.isRequired
};

export default TableCustom;
