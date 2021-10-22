import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        const message = {
            author: "Bill",
            message: "hey guys",
            unread: true
        }
        return (
            <div className={ (message.unread) ? "unread-message-class" : "read-message-class" }>
                <h3>{ message.author }</h3>
                <p> { message.message }</p>
                <p> { message.unread } </p>
            </div>
        )
    }
}
