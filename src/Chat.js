import {React, Component}  from 'react';
import Message from './Message';
import AddMessage from './AddMessage';
import { connect } from 'react-redux'
import {db} from './utils/firebase';
import { setIsLoading, showError } from './store/actions/actions';
import './Chat.css';
import Preloader from './Preloader';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            msgAdded: true,
        }
    }

    async componentDidMount() {
        this.props.setIsLoading(true);
        try {
            db.ref('chats').on('value', snapshot => {
                let chats = [];
                snapshot.forEach(elem => {
                    chats.push({...elem.val(), key: elem.key})
                });
                this.setState({...this.state, msgAdded: chats.length > this.state.chats.length})//delete or add message(affects on scroll)
                this.setState({ chats });
                this.props.setIsLoading(false)
            });
        }
        catch (error) {
            this.props.showError(error);
            this.props.setIsLoading(false);
        }
    }

    componentDidUpdate() {
        if(this.state.msgAdded) {
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
              });
        }
    }

    render() {
        return (
            <>
                <div className="chat">
                    {this.props.isLoading ?
                        <Preloader/>
                        :
                        <>
                        {this.state.chats.map( message => 
                            <Message 
                                avatar={message.avatar}
                                name={message.name}
                                message={message.message}
                                timestamp={message.timestamp}
                                key={message.key}
                                messageKey={message.key}
                                isYourMessage={message.userId === this.props.userId}
                            />
                        )}
                        <AddMessage/>
                        </>
                    }
                    
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        isLoading: state.app.isLoading,
    }
}
const mapDispatchToProps = {
    setIsLoading,
    showError
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);