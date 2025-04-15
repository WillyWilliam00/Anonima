import { FaUserSecret } from "react-icons/fa"
import Message from "./Message"

const testArray: string[] = ["1", "2", "3"]

const Chat: React.FC = () => {
    return (
       <div className="flex flex-col">
        <div className="w-full">
            <div className="border-b h-20 flex items-center">
                <div className="h-full w-20 border-r grid justify-center items-center"><FaUserSecret className="text-green-500 h-10 w-10"/></div>
                <div><p>Nome Utente</p></div>
            </div>
        </div>
        <div className="flex-1">
                {
                    testArray.map((index) => 
                        <Message key={index} index={index}/>
                    )
                }
        
        </div>
        <div className="w-full h-20">
            <input type="text" placeholder=" Scrivi Messaggio" className="w-full border-t h-20"/>
        </div>
        
       </div>
    )
}

export default Chat