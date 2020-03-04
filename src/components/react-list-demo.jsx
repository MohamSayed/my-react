import React from 'react';
import ReactList from 'react-list';

class ReactListDemoComponent extends React.Component {
  state = {
    data: [1, 2, 3]
  };


  renderItem = (index, key) => {
    return <div key={key}>{this.state.data[index]}</div>;
  }

  render() {
    return (
      <div>
        <h1>Accounts</h1>
        <div style={{ overflow: 'auto', maxHeight: 400 }}>
          <ReactList
            itemRenderer={this.renderItem}
            length={this.state.data.length}
            type='uniform'
          />
        </div>
      </div>
    );
  }
}

export default ReactListDemoComponent;