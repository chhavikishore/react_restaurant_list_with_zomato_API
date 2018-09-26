/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import { Button } from '@material-ui/core';

let existingCategories = []; // to store list of categories
let restaurantNames = [];
class CategoryCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    existingCategories = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const v = i;
        existingCategories.push(
          <Button className="button_color" key={v} onClick={() => this.showCollection(localStorage.key(v))}>
            {localStorage.key(v)}
          </Button>,
        );
      }
    }
    this.setState({ // to re-render the component

    });
  }

  showCollection(keyValue) {
    restaurantNames = [];
    const { categoryList } = this.state;
    let category = categoryList;
    category = [];
    category.push(localStorage.getItem(keyValue).split(','));
    for (let i = 0; i < category[0].length; i += 1) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const v = i;
        restaurantNames.push(
          <div key={v}>{category[0][v]}</div>,
        );
      }
    }

    this.setState({ // to re-render the component

    });
  }

  render() {
    return (
      <div className="res_details_card">
        <div>{existingCategories.map(data => data)}</div>
        <div>{restaurantNames.map(data => data)}</div>
      </div>
    );
  }
}

export default CategoryCollection;
