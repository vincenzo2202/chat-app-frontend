import { createContext, useContext, useEffect, useState } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import PotencialChats from "../../components/PotencialChats/PotencialChats";
import UserChat from "../../components/userChat.jsx/userChat";
import ChatBox from "../../components/ChatBox/ChatBox";

  
const Chat = () => { 
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat, messages, sendTextMessages} = useContext(ChatContext);
    const { currentChat } = useContext(ChatContext);
    const [localCurrentChat, setLocalCurrentChat] = useState(null); 

    const handleClick = (chat) => {
        updateCurrentChat(chat); 
        setLocalCurrentChat(chat); 
    };
 
    useEffect(() => {
        // console.log('Chat is re-rendering, currentChat:', currentChat);
    }, [currentChat]);

  
    return (
        <Container>
            <PotencialChats />
            {userChats?.length < 1 ? null : 
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index} onClick={() => handleClick(chat)}>
                                <UserChat chat={chat} user={user} />
                            </div>
                            )
                        })}
                    </Stack>

                    <ChatBox 
                    
                    chat={localCurrentChat} 
                    messages={messages}
                    sendTextMessages={sendTextMessages}/>

                </Stack>
            }
        </Container>
    );
}

export default Chat;