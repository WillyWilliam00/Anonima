import { FaUserSecret } from "react-icons/fa";
import AnimatePing from "./ui/AnimatePing";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <div className="flex-1   bg-background-primario border-y-2 border-r-2 border-primario">
      <div className="flex h-auto  border-b-2 border-primario bg-background-secondario">
        <div className="flex items-center rounded-full p-1 m-2  border-2 border-primario w-fit bg-background-primario">
          <FaUserSecret size={20} className="text-primario m-2" />
        </div>
        <div className="border-l-2 border-primario p-2 pl-2.5">
          <p className="text-primario font-bold ">WILLIAM_COSTA</p>
          <p className="text-primario text-sm flex gap-x-2 items-center">
            {" "}
            <AnimatePing size={"md"} /> utente collegato
          </p>
        </div>
      </div>
      <div className=" h-[calc(100vh-320px)] overflow-y-scroll">
        {[...Array(50)].map((index) => (
          <div key={index}>ciaone</div>
        ))}
      </div>
      <div className="flex p-4 items-center justify-between border-t-2 border-primario bg-background-secondario gap-4 ">
       <div className="flex-1 ">
        <label><input type="text" name="newMessage"  placeholder="TYPE_NEW_MESSAGE..." className="text-primario w-full p-1 rounded border-2 border-primario bg-background-primario" /></label>
       </div>
       <div className="flex items-center justify-center gap-2">
        <button type="button" className="ut-button "><IoIosSend size={18} /></button>
       </div>
      </div>
    </div>
  );
};

export default Chat;
