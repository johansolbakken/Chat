import { useState } from "react";

class ChatMessage {
    from: string = "";
    message: string = "";
}

export const Chat = () => {
  
    const [chats, setChats] = useState<ChatMessage[]>([
    {
      from: "Jonas",
      message: "Dette var en kul melding",
    },
    {
      from: "You",
      message: "Ojj, det var sykt!",
    },
    {
      from: "You",
      message: "Ojj, det var sykt!",
    },
    {
      from: "Jonas",
      message: "Dette var en kul melding",
    },
    {
      from: "You",
      message: "Ojj, det var sykt!",
    },
  ]);

  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (message.length > 0) {
        const newChats:any = [...chats, {from: "You", message: message}];
        setChats(newChats);
        setMessage("");
    }
  }

  return (
    <div className="border bg-white w-full ll p-3">
      <ul>
        {chats.map((chat, index) => {
          const alignment = chat.from === "You" ? "text-right" : "text-left";
          const color = chat.from === "You" ? "bg-lime-400" : "bg-slate-400";
          const boxAlign =
            chat.from === "You" ? "justify-end" : "justify-start";
          return (
            <li className={`${alignment}`} key={index}>
              <p className={`text-xs`}>{chat.from}</p>
              <div className={`flex ${boxAlign}`}>
                <p className={`p-3 rounded-2xl ${color} w-fit`}>
                  {chat.message}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex p-2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write message here"
          onChange={(e) =>setMessage(e.target.value)}
          value={message}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleClick();
            }
          }}
        />
        <img
          className="inline w-10 ml-2"
          src="https://cdn-icons-png.flaticon.com/512/60/60525.png"
          alt=""
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
