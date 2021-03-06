import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import './SearchBar.css';
class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search input: ', this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Lambda School React II</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Navbar.Form>
            </Navbar>
        )
    }
}

export default SearchBar;



// import React from 'react';
// import { Navbar, Button } from '/instagram/node_modules/react-bootstrap';

// const SearchBar = () => (
//     <Navbar>
//         <Navbar.Header>
//             <Navbar.Brand>
//                 <a href="#">React Bootstrap Example</a>
//             </Navbar.Brand>
//         </Navbar.Header>
//         <Navbar.Form pullLeft>
//             <input type="text" placeholder="Bootstrap Input" />
//             <Button type="submit">Submit</Button>
//         </Navbar.Form>
//     </Navbar>
// );

// export default SearchBar;
