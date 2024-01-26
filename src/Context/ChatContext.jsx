import { createContext, useState, useEffect, useCallback } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [isUserChatsError, setUserChatsError] = useState(null);
    const [potencialChats, setPotencialChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null)
    const [isMessagesLoading, setIsMessagesLoading] = useState(false)
    const [messagesError, setMessagesError] = useState(null)

    console.log('messages', messages);

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseUrl}/users/all`);

            if (response.error) {
                return console.log('Error fetching users', response);
            }

            const pChats = response.filter((u) => {

                let isChatCreated = false;
                if (user && user?._id === u._id) {
                    return false;
                };

                if (userChats) {
                    isChatCreated = userChats?.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id;
                    })
                }

                return !isChatCreated


            });

            setPotencialChats(pChats)

        }
        getUsers()
    }, [userChats])

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true)
                setUserChatsError(null)

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`)

                setIsUserChatsLoading(false)

                if (response.error) {
                    return setUserChatsError(response)
                }

                setUserChats(response)
            }
        };
        getUserChats()
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {

            setIsMessagesLoading(true)
            setMessagesError(null)

            const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`)

            setIsMessagesLoading(false)

            if (response.error) {
                return setMessagesError(response)
            }

            setMessages(response)

        };
        getMessages()
    }, [currentChat]);

    const updateCurrentChat = useCallback((chat) => {
        setCurrentChat(chat);
    }, [])

    const createChat = useCallback(async (firstId, secondId) => {
        const response = await postRequest(`${baseUrl}/chats`, JSON.stringify({
            firstId,
            secondId,
        }));

        if (response.error) {
            return console.log('Error creating a chat', response);
        }

        setUserChats((prev) => [...prev, response]);

    }, []);


    return (
        <ChatContext.Provider
            value={{
                userChats,
                isUserChatsError,
                isUserChatsLoading,
                potencialChats,
                createChat,
                updateCurrentChat,
                messages,
                isMessagesLoading,
                messagesError,

            }}
        >

            {children}
        </ChatContext.Provider>
    )
}

