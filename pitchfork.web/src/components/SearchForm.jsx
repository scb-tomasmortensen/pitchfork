import React from 'react'
import Constants from '../constants/constants'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCriteria: "",
            searchResult: []
        }
    };

    handleSubmit = async () => {}

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <input id="criteria" type="text" name="criteria" placeholder="  Enter search word...  " />
                <input variant="primary" type="submit" value="Search"/>
            </div>
            </form>
        );
    }

    async performSearch() {
        try {
            const res = await fetch(`${Constants.ApiUrl}/search?criteria=${this.state.searchCriteria}`);
            return await res.json();
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async componentDidMount() {
        try {
            const searchResult = await this.performSearch();
            await this.setStateAsync({ searchResult: searchResult });
        } catch (error) {
            console.log(error);
        }
    }
}

export default SearchForm