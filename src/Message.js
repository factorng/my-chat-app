import {React, Component} from 'react';
import {db} from './utils/firebase';
import './Message.css';

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async deleteMessage() {
        try {
            db.ref('chats/' + this.props.messageKey).remove();
        }
        catch (error) {
            this.setState({error})
        }
    }

    dateFormate = () => {
        const date = new Date(this.props.timestamp);
        return date.toTimeString().split(' ')[0];
    }

    render() {
        return(
            <div className="chat-message">
                <div className={
                    this.props.isYourMessage ? 
                     "chat-user_your-message" :
                     "chat-user"
                }>
                    <div className="chat-user__avatar" style={{backgroundImage: `url(${this.props.avatar})`}}></div>
                    <p className="chat-user__name">{this.props.name}</p>
                    <p className="chat-message__time">{this.dateFormate()}</p>
                </div>
                <p className={
                    this.props.isYourMessage ?
                     "chat-message__content chat-message__content_your-message" :
                     "chat-message__content"}
                >{this.props.message}</p>
                {this.props.isYourMessage ? 
                    <button className="chat-message__button-delete" onClick={() => this.deleteMessage()}></button>
                    :
                    ''
                }
            </div>
        );
    }

}