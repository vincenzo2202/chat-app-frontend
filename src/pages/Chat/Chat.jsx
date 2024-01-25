import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";

const Chat = () => {

    const {userChats, isUserChatsLoading, isUserChatsError } = useContext(ChatContext);

    console.log('UserChats', userChats)
    return ( <>Chat</> );
}
 
export default Chat ;