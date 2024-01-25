import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { AuthContext } from "../../Context/AuthContext";

const PotencialChats = () => {
    const {user} = useContext(AuthContext)
    const { potencialChats, createChat } = useContext(ChatContext);
    console.log('pchats', potencialChats);
    return (<>
        <div className="all-users" >
            {potencialChats && potencialChats.map((u, index) => {
                return (
                    <div className="single-user" key={index} onClick={()=>createChat(user._id, u._id)}>
                        {u.name}
                        <span className="user-online"></span>
                    </div>
                );
            })}
        </div>
    </>);
}

export default PotencialChats;