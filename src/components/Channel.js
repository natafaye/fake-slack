import React, { Component } from 'react'
import Message from './Message'

export default class Channel extends Component {
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
            <div className="col">
                { (channel.messages.some(c => c.unread)) ? <div className="alert alert-primary">You have unread</div> : "" }
                <h2>{ channel.name }</h2>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        )
    }
}
