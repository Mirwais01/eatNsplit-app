const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="container mx-auto md:px-12 py-24">
      {/* sidebar */}
      <FriendList />
    </div>
  );
}

function FriendList() {
  return (
    <div className="w-1/3">
      <ul className="space-y-2">
        {initialFriends.map((el) => (
          <Friend el={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ el }) {
  return (
    <li className="flex justify-between items-center p-3 rounded-lg hover:bg-orange-100 duration-200">
      <div className="flex space-x-4">
        <div>
          <img className="rounded-full" src={el.image} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{el.name}</h1>
          <p
            className={` ${el.balance > 0 && "text-green-600"} ${
              el.balance < 0 && "text-red-600"
            } text-sm`}
          >
            {el.balance > 0 && `${el.name} owe you ${el.balance}$`}
            {el.balance < 0 && `You owe ${el.name} ${el.balance}$`}
            {el.balance === 0 && `You and ${el.name} are even ${el.balance}$`}
          </p>
        </div>
      </div>

      <div>
        <Button>Select</Button>
      </div>
    </li>
  );
}

function Button({ children }) {
  return (
    <button className="bg-orange-400 font-bold hover:bg-orange-300 px-5 py-2 rounded-md">
      {children}
    </button>
  );
}
