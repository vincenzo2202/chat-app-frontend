import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext"; 
import { Container, Stack } from "react-bootstrap"; 
import { AuthContext } from "../../Context/AuthContext";
import PotencialChats from "../../components/PotencialChats/PotencialChats";
import UserChat from "../../components/userChat.jsx/userChat";


const Chat = () => {


    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);
 
    return (
        <Container>
            <PotencialChats />
            {userChats?.lenght < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index} onClick={()=>updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user} />
                                </div>
                            )
                        })}
                    </Stack>
                    <p>ChatBox</p>
                </Stack>
            )}
        </Container>
    );
}

export default Chat;