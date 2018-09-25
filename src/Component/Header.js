/* eslint react/jsx-filename-extension:0 */
import React from "react";
import {Link} from 'react-router-dom';

//importing component of material ui
import { Button, Input }  from "../../node_modules/@material-ui/core";
import  Navigation from "../../node_modules/@material-ui/core/AppBar";

class Navbar extends React.Component {

      render(){ // to reder the the component on DOM
        return(
            <Navigation className="nav">
                <ul className="nav_ul">
                    <li>
                        <Button>Foodie</Button>
                    </li>
                    <li>
                        <Link className="restaurant_link" to={`/collection_details`}>
                            <Button>List Category Details</Button>
                        </Link>
                    </li>
                </ul>
            </Navigation>
        );
    }
}

export default Navbar;

