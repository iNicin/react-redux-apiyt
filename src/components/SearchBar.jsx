import React from 'react';


// CSS //

import '../style/search.css'

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-main">
                <form onSubmit={this.handleSubmit} className="search-form">
                    <div className="search-input">
                        <label htmlFor="video-search">SelectTube</label>
                        <input onChange={this.handleChange} name='video-search' placeholder= 'Search' type="text" value={this.state.term}/>
                          <button type="submit" id="button-search">
                          <span aria-hidden="Lupa" role="img">🔍</span>
                             Search
                          </button>
                        
                    </div> 
                </form>
            </div>
        )
    }
};
export default Searchbar;