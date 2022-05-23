import { useState } from 'react'

const Chat = (props) => {

    const [newMessage, setNewMessage] = useState("")

    const onChangeHandler = (e) => {
        setNewMessage(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await props.sendMessage(newMessage)
    }

    return (
        <div className="all-body">
            <div className="one-card margin-bottom">
                <p>You chat on the channel_1</p>
                <div className="all-messages">
                    { props.allMessages.map((message, i) =>
                        <p className="one-message" key={i}>{ message }</p>
                    )}
                </div>

            </div>

            <div className="one-card margin-bottom">
                <p>Write and send your message</p>
                <form onChange={onChangeHandler} onSubmit={onSubmitHandler}>
                    <input className="input-in-card" type="text" name="chat" />
                    <input className="button-color" type="submit" name="submit" />
                </form>
            </div>

        </div>
    );
};

export default Chat;
