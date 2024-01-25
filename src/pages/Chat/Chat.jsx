import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../../components/NavBar/userChat.jsx/userChat";
import { AuthContext } from "../../Context/AuthContext";


const Chat = () => {


    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, isUserChatsError } = useContext(ChatContext);



    console.log('UserChats', userChats)
    return (
        <Container>{userChats?.lenght < 1 ? null : (
            <Stack direction="horizontal" gap={4} className="align-items-start">
                <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                    {isUserChatsLoading && <p>Loading chats...</p>} 
                    {userChats?.map((chat,index)=>{
                        return(
                            <div key={index}>
                                <UserChat chat={chat} user={user}/>
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