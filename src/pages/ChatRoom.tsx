import Chat from "../components/Chat"
import CronologiaChat from "../components/CronologiaChat"

const  ChatRoom: React.FC = () => {

    return (
        
           <div className="grid grid-cols-[0.5fr_1fr] h-full">
            <CronologiaChat/>
            <Chat/>
           </div>
        
        
    )
}

export default ChatRoom