/* eslint react/jsx-filename-extension:0 */
/* global localStorage:true */
import React from 'react';
import { Button } from '@material-ui/core';

let listcat = []; // to store list of categories
let lists = [];
class CategoryCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_list: [],
    };
  }

  componentDidMount() {
    listcat = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const v = i;
      listcat.push(
        <Button key={v} onClick={() => this.showCollection(localStorage.key(v))}>
          {localStorage.key(v)}
        </Button>,
      );
    }
    this.setState({ // to re-render the component

    });
  }

  showCollection(keyValue) {
    lists = [];
    this.state.category_list = [];
    this.state.category_list.push(localStorage.getItem(keyValue).split(','));
    for (let i = 0; i < this.state.category_list[0].length; i += 1) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const v = i;
        lists.push(
          <div key={v}>{this.state.category_list[0][v]}</div>,
        );
      }
    }

    this.setState({ // to re-render the component

    });
  }

  render() {
    return (
      <div>
        <div>{listcat.map(data => data)}</div>
        <div>{lists.map(data => data)}</div>
      </div>
    );
  }
}

export default CategoryCollection;
