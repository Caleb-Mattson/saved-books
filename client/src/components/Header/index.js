import React from "react";
import "./style.css";


export default {
    Header: function () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Logo</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="/books">Books</a></li>
                            <li><a href="/favorites">Favorited</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}