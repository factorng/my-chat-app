import {React, Component} from 'react';
import {db} from './utils/firebase';
import { connect } from 'react-redux';
import './AddMessage.css';

 class AddMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputMessage: '',
            errorMessage: null,
            showError: false,
        }
    }

    sendMessage = (e) => {
        e.preventDefault();
        if(this.state.inputMessage.length > 0 && this.state.inputMessage.length < 60){
            try{
                db.ref('chats').push({
                    avatar: this.props.user.avatar,
                    message: this.state.inputMessage,
                    name: this.props.user.name,
                    timestamp: Date.now(),
                    userId: this.props.user.userId
                });
                this.setState({...this.state, inputMessage: ''});
            } catch(error) {
                this.setState({...this.state, errorMessage: error, inputMessage: '', showError: true})
            }
            
        } else {
            e.target.querySelector('input').blur()
            if(this.state.inputMessage.length === 0)
                this.setState({...this.state, errorMessage: 'Сообщение не должно быть пустым', showError: true});
            if(this.state.inputMessage.length > 60)
                this.setState({...this.state, errorMessage: 'Сообщение не должно содержать более 60 символов', inputMessage: '', showError: true})
            
        }
        
    }

    errorMessageHandler = (e) => {
        this.setState({...this.state, showError: false});
    }

    inputChangeHandler = (e) => {
        this.setState({...this.state, inputMessage: e.target.value});
    }

    render() {
        return (
            <div className="add-message">
                <form className="form-add-message" onSubmit={(e) => this.sendMessage(e)}>
                    <input className="form-add-message__input" value={this.state.inputMessage}
                    onChange={(e) => this.inputChangeHandler(e)} onFocus={(e) => this.errorMessageHandler(e)} placeholder="введите сообщение..."/>
                    <button className="form-add-message__button"  type="submit"></button>
                    {this.state.showError ? 
                        <span className="form-add-message__error">{this.state.errorMessage}</span> 
                        :
                        ''
                    }
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
      user: state.user
    }
};
  
export default connect(mapStateToProps, null)(AddMessage);