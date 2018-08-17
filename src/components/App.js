import React from 'react';
import PropTypes from 'prop-types';
import InputCustom from './common/InputCustom';
import TableCustom from './common/TableCustom';

class App extends React.Component {
  state = {
    inputValue: '',
    bodyRows: [],
    headColumns: [{name: 'Id'}, {name: 'Name'}],
    index: 0
  };

  onClick = () => {
    const bodyRows = this.state.bodyRows;
    this.setState({
      bodyRows: [...bodyRows, { columns: [ bodyRows.length.toString(), this.state.inputValue ] }]
    });
  };

  onChange = event => {
    this.setState( { inputValue: event.target.value } );
  };

  render() {
    return (
      <div className="container">
        <div className="flexend">
          <InputCustom
            label="Name"
            inputCustomValue={this.state.inputValue}
            inputCustomOnChange={this.onChange}
          />
          <button
            onClick={this.onClick}
            style={{height: '30px', marginLeft: '5px'}}>
            Add Typed Item
          </button>
        </div>
        <div style={{marginTop: '8px'}}>
          <TableCustom
            headColumns={this.state.headColumns}
            bodyRows={this.state.bodyRows}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
