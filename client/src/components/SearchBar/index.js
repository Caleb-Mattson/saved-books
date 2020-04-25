import React from "react";
import "./style.css";

export default {
    SearchBar: function () {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <input value="Alvin" id="first_name2" type="text" className="validate" />
                    <label className="active" for="first_name2">Search</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
            </div>
        )
    }
}
