import React from 'react'

class SearchForm extends React.Component {
    render() {
        return(
            <div>
                <input id="criteria" type="text" name="criteria" placeholder="  Enter search word...  " />
                <input variant="primary" type="button" value="Search"/>
            </div>
        );
    }
}

export default SearchForm