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
        <div>
            <p>You chat on the channel : channel_1</p>
            <p>All your messages below</p>
            { props.allMessages.map((message, i) =>
                <p key={i}>{ message }</p>
            )}

            <form onChange={onChangeHandler} onSubmit={onSubmitHandler}>
                <input type="text" name="chat" />
                <input type="submit" name="submit" />
            </form>
        </div>
    );
};

export default Chat;
