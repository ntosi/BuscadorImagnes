import React from 'react'


class SearchBar extends React.Component{
    render (){
        return (<div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label> Busqueda de personas</label>
                </div>
                <input type="text" />
            </form>
        </div>
        )
    }
}

export default SearchBar;
