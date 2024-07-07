import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from '../../assets/avatar.svg'
import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";

const UserChat = ({ chat, user }) => {

    const { recipientUser } = useFetchRecipientUser(chat, user);

    const {onLineUsers} = useContext(ChatContext);
    const isOnLine = onLineUsers.some((u) => u.userId === recipientUser?._id);

    return (
        <Stack
            direction="horizontal"
            gap={3}
            className="user-card align-items-center p-2 justify-content-between"
            role="button"
        >
            <div className="d-flex">
                <div className="me-2">
                    <img src={avatar} alt="" height='40px'/>
                </div>
                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">Text Message</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">12-12-2022</div>
                <div className="this-user-notifications">2</div>
                <div className={isOnLine ? 'user-online' : '' }></div>
            </div>
        </Stack>
    );
}

export default UserChat;