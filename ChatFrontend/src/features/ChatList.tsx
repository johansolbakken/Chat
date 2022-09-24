export const CharList = () => {
  const items = [
    { name: "Johan Solbakken", lastMessage: "Ring meg..." },
    { name: "Nelson Jonson", lastMessage: "Huska du å kjøpe øl?" },
    {
      name: "Nekter Nektar",
      lastMessage: "Hei hei, husker du da du var i Frankrike?",
    },
  ];
  return (
    <div className="h-full bg-white">
      <ul className="flex-col">
        {items.map((message, index) => {
          return (
            <li className="p-2 flex-col border w-full text-left" key={index}>
              <p className="text-md w-full">{message.name}</p>
              <p className="text-sm w-full">{message.lastMessage}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
