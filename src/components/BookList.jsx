import React, { Component } from 'react'

class BookList extends Component {
    renderBook = () => {

    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    <li>
                        {
                            this.renderBook()
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

export default BookList;