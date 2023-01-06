import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import Message from "./components/message/Message";
import avatar from './avatar.png'
import {v1} from "uuid";
import MyButton from "./components/MyButton";
import FriendMessage from "./components/friend-message/FriendMessage";
import {Counter} from "./components/Counter/Counter";

export type MessageType = {
    id: string
    user: { avatar: string, name: string }
    message: { text: string, time: string }
}

function App() {

    const [myMessages, setMyMessages] = useState<Array<MessageType>>([])
    const [friendMessages, setFriendMessages] = useState<Array<MessageType>>([])
    const [myInputValue, setMyInputValue] = useState('')
    const [friendInputValue, setFriendInputValue] = useState('')
    const [countFriendMessage, setCountFriendMessage] = useState<number>(5)
    const [countMyMessage, setCountMyMessage] = useState<number>(5)
    const [disabledMy, setMyDisabled] = useState<boolean>(false)
    const [disabledFriend, setFriendDisabled] = useState<boolean>(false)

    const addMyMessage = () => {
        if (countMyMessage > 1 && myInputValue.trim() !== '') {
            setMyMessages([...myMessages, {
                id: v1(),
                user: {
                    avatar: avatar,
                    name: 'Михаил'
                },
                message: {
                    text: myInputValue,
                    time: '23:43'
                }
            }])
            setMyInputValue('')
            setCountMyMessage(countMyMessage - 1)
        } else if (myInputValue.trim() !== '') {
            setMyMessages([...myMessages, {
                id: v1(),
                user: {
                    avatar: avatar,
                    name: 'Михаил'
                },
                message: {
                    text: myInputValue,
                    time: '23:43'
                }
            }])
            setMyInputValue('')
            setCountMyMessage(countMyMessage - 1)
            setMyDisabled(true)
        }
    }

    const addFriendMessage = () => {
        if (countFriendMessage > 1 && friendInputValue.trim() !== '') {
            setFriendMessages([...friendMessages, {
                id: v1(),
                user: {
                    avatar: avatar,
                    name: 'Константин'
                },
                message: {
                    text: friendInputValue,
                    time: '23:43'
                }
            }])
            setFriendInputValue('')
            setCountFriendMessage(countFriendMessage - 1)
        } else if (friendInputValue.trim() !== '') {
            setFriendMessages([...friendMessages, {
                id: v1(),
                user: {
                    avatar: avatar,
                    name: 'Константин'
                },
                message: {
                    text: friendInputValue,
                    time: '23:43'
                }
            }])
            setFriendInputValue('')
            setCountFriendMessage(countFriendMessage - 1)
            setFriendDisabled(true)
        }

    }

    const onMyChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMyInputValue(event.currentTarget.value)
    }

    const onFriendChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFriendInputValue(event.currentTarget.value)
    }

    const onKeyPressEnterMy = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' && myInputValue.trim() !== '' && countMyMessage > 0) {
            addMyMessage()
        }
    }

    const onKeyPressEnterFriend = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' && friendInputValue.trim() !== '') {
            addFriendMessage()
        }
    }

    const deleteOneMyMessage = () => {
        if (countMyMessage === 0) {
            setMyDisabled(false)
        }
        myMessages.shift()
        setMyMessages([...myMessages])
        setCountMyMessage(countMyMessage + 1)
    }

    const deleteOneFriendMessage = () => {
        if (countFriendMessage === 0) {
            setFriendDisabled(false)
        }
        friendMessages.shift()
        setFriendMessages([...friendMessages])
        setCountFriendMessage(countFriendMessage + 1)
    }

    const deleteAllMyMessage = () => {
        setCountMyMessage(5)
        setMyMessages([])
        setMyDisabled(false)
    }

    return (
        <div className="App-header">
            <Counter />
            {/*<div className='messageBlock'>
                <div className='friendMessageBlock'>
                    {friendMessages.map(m => <FriendMessage message={m}/>)}
                </div>
                <div className='myMessageBlock'>
                    {myMessages.map(m => <Message message={m}/>)}
                </div>
            </div>

            <div className='inputsBlock'>
                <div className='friendInputBlock'>
                    <div>Осталось {countFriendMessage} сообщений</div>
                    <input onKeyPress={(event) => onKeyPressEnterFriend(event)} value={friendInputValue}
                           onChange={onFriendChangeInput}/>
                    <MyButton style={{marginTop: '5px'}} disabled={disabledFriend} onClickHandler={addFriendMessage}
                              title={'Отправить'}/>
                    <MyButton style={{marginTop: '5px'}} disabled={countFriendMessage === 5}
                              onClickHandler={deleteOneFriendMessage} title={'Удалить последнее'}/>
                    <MyButton style={{marginTop: '5px'}} disabled={countFriendMessage === 5} onClickHandler={() => {
                    }} title={'Удалить все'}/>
                </div>
                <div className='myInputBlock'>
                    <div>Осталось {countMyMessage} сообщений</div>
                    <input onKeyPress={(event) => onKeyPressEnterMy(event)} value={myInputValue}
                           onChange={onMyChangeInput}/>
                    <MyButton style={{marginTop: '5px'}} disabled={disabledMy} onClickHandler={addMyMessage}
                              title={'Отправить'}/>
                    <MyButton style={{marginTop: '5px'}} disabled={countMyMessage === 5}
                              onClickHandler={deleteOneMyMessage} title={'Удалить последнее'}/>
                    <MyButton style={{marginTop: '5px'}} disabled={countMyMessage === 5}
                              onClickHandler={deleteAllMyMessage} title={'Удалить все'}/>
                </div>
            </div>*/}
        </div>
    );
}

export default App;
