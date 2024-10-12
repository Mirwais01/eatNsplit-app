import AddFriend from "./AddFriend";
import Button from "./Button";

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
    <div className="container mx-auto md:px-12 py-24 grid grid-cols-1 md:grid-cols-2">
      {/* sidebar */}
      <div className="flex flex-col">
        <FriendList />
        <AddFriend />
        <div className="flex justify-end mt-5 me-5 md:me-44">
          <Button>Close</Button>
        </div>
      </div>
    </div>
  );
}

function FriendList() {
  return (
    <div className="md:w-2/3 mx-2">
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
      <div className="flex md:space-x-4 space-x-2">
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
