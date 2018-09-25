import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let category_list = [];

class Add_to_Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            category_added: ""
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    inputCategoryChange = (event) => {
        this.setState({ category_added: event.target.value });
    }

    addNewCategory = () => { //to add category to local storage
        console.log(this.state.category_added);
        const restaurant_list = [];
        const cat_name = this.state.category_added; // user input category 
        const res_name = this.props.match.params.name; // restaurant name from route
        if (localStorage.getItem(cat_name) != null) { // if category exist .. fetch and push new restaurant name
            restaurant_list.push(localStorage.getItem(cat_name));
            restaurant_list.push(res_name);
            localStorage.setItem(cat_name, restaurant_list);
        } else {
            localStorage.setItem(cat_name, res_name); // pushed restaurnt name in new category name 
            alert(res_name+" successfully added to "+cat_name +". To see category details check click Show Category");
        }
        this.handleClose();
    }

    addRestaurantToExistingCat = (category_name) => { //to add restaurant to existing category
        const restaurant_list = [];
        const res_name = this.props.match.params.name; // restaurant name from route
        restaurant_list.push(localStorage.getItem(category_name));
        restaurant_list.push(res_name);
        localStorage.setItem(category_name, restaurant_list);
        alert(res_name+" successfully added to "+category_name +". To see category details check click Show Category");
        
    }

    existingCategory = () => {
        category_list = [];
        for (let i = 0; i < localStorage.length; i++) { //lopp through local storage key value pair
            if(localStorage.key(i) != "loglevel:webpack-dev-server"){
                let v = i;
                category_list.push(
                    <Button key={v} onClick={() => { this.addRestaurantToExistingCat(localStorage.key(v)) }}>
                        {localStorage.key(v)}
                    </Button> //key has category name 
                );
            }
        }
        this.setState({ //to re-render the component 
        });
    }

    render() {
        return (
            <div>
                <div>Add {this.props.match.params.name} to : </div>
                <div>
                    <Button onClick={this.handleClickOpen}>New Category</Button>
                </div>
                <div>
                    <Button onClick={this.existingCategory}>Existing Category</Button>
                    {category_list.map(data => data)}
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
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={this.addNewCategory} color="primary">
                            Add Category
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Add_to_Category;