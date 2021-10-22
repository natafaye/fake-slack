import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        const channel = {
            name: "fdsjkfldsjfsd-fdsjfkdlsfds-2021",
            messages: [
                {
                    author: "Bill",
                    message: "fdjsklfdsjfkdlsjfdsklfjdskfldjsfklds",
                    unread: false,
                },
                {
                    author: "Bill",
                    message: "fdjsklfdsjfkdlsjfdsklfjdskfldjsfklds",
                    unread: false
                }
            ]
        }

        return (
            <div className="col-3 bg-light">
                So many buttons
                <button className={ (channel.messages.some(c => c.unread)) ? "bold-class" : "" }>
                    { channel.name }
                </button>
            </div>
        )
    }
}
