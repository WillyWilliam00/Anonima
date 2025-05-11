import Chat from "./Chat";
import CronologiaChat from "./CronologiaChat";
import Layout from "./Layout";

const ChatRoom = () => {
  return (
    <Layout>
      <div className="flex items-center mb-2 justify-between">
        <h2 className="text-primario text-xl">Chat_Room</h2>
        <button type="button" className="ut-button bg-background-secondario">
          Termina_Sessione_Criptata
        </button>
      </div>
      <div className="flex flex-1 ">
        <CronologiaChat/>
        <Chat />
      </div>
    </Layout>
  );
};

export default ChatRoom;
