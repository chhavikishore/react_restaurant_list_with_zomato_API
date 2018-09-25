/* eslint react/jsx-filename-extension:0 */
/* global localStorage:true */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let categoryList = [];

class addToCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      categoryToAdd: '',
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addNewCategory = this.addNewCategory.bind(this);
    this.existingCategory = this.existingCategory.bind(this);
    this.addRestaurantToExistingCat = this.addRestaurantToExistingCat.bind(this);
    this.inputCategoryChange = this.inputCategoryChange.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  inputCategoryChange(event) {
    this.setState({ categoryToAdd: event.target.value });
  }

  addNewCategory() { // to add category to local storage
    const restaurantList = [];
    const catName = this.state.categoryToAdd; // user input category
    const resName = this.props.match.params.name; // restaurant name from route
    //  if category exist .. fetch and push new restaurant name
    if (localStorage.getItem(catName) != null) {
      restaurantList.push(localStorage.getItem(catName));
      restaurantList.push(resName);
      localStorage.setItem(catName, restaurantList);
    } else {
      localStorage.setItem(catName, resName); // pushed restaurnt name in new category name
    //   alert(`${resName} successfully added to ${catName}.`);
    }
    this.handleClose();
  }

  addRestaurantToExistingCat(categoryName) { // to add restaurant to existing category
    const restaurantList = [];
    const resName = this.props.match.params.name; // restaurant name from route
    restaurantList.push(localStorage.getItem(categoryName));
    restaurantList.push(resName);
    localStorage.setItem(categoryName, restaurantList);
    // alert(`${resName} successfully added to ${categoryName}.`);
  }

  existingCategory() {
    categoryList = [];
    for (let i = 0; i < localStorage.length; i += 1) { // lopp through local storage key value pair
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const v = i;
        categoryList.push(
          <Button className="button_color" key={v} onClick={() => { this.addRestaurantToExistingCat(localStorage.key(v)); }}>
            {localStorage.key(v)}
          </Button>, // key has category name
        );
      }
    }
    this.setState({ // to re-render the component
    });
  }

  render() {
    return (
      <div>
        <div>
Add
          {this.props.match.params.name}
to :
        </div>
        <div>
          <Button onClick={this.handleClickOpen}>New Category</Button>
        </div>
        <div>
          <Button className="button_color" onClick={this.existingCategory}>Existing Category</Button>
          {categoryList.map(data => data)}
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Category Details : </DialogTitle>
          <DialogContent>
            <DialogContentText>
                            Enter name of category to add :
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
                            // label="Enter category name"
              type="text"
              fullWidth
              onChange={this.inputCategoryChange}
            />
          </DialogContent>
          <DialogActions>
            <Button className="button_color" onClick={this.handleClose} color="primary">
                            Close
            </Button>
            <Button className="button_color" onClick={this.addNewCategory} color="primary">
                            Add Category
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default addToCategory;
