import { useState } from "react";

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

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFriend, setAddFriend] = useState(false);
  const [isSelected, setSetSelected] = useState(null);

  function handleSelection(friendId) {
    const selectedFriend = friends.find((friend) => friend.id === friendId);
    setSetSelected(selectedFriend);
    setAddFriend(false);
  }

  function handleIsAddFriend() {
    setAddFriend((isAddFriend) => !isAddFriend);
    setSetSelected(null);
  }

  function handleAddfriend(friend) {
    const newFriend = [...friends, friend];
    setFriends(newFriend);
  }

  return (
    <div className="container px-4 mx-auto space-y-5 md:space-y-0 grid md:grid-cols-2 grid-cols-1 my-16">
      <FriendList
        friends={friends}
        isAddFriend={isAddFriend}
        handleIsAddFriend={handleIsAddFriend}
        onSelection={handleSelection}
      />
      {isSelected && <SplitFriend />}
      {isAddFriend && <AddFriend handleAddfriend={handleAddfriend} />}
    </div>
  );
}

export default App;

function FriendList({ isAddFriend, handleIsAddFriend, friends, onSelection }) {
  return (
    <div className="p-3 flex flex-col lg:w-2/3 mx-auto space-y-3">
      {friends.map((el) => (
        <Friend friend={el} onSelection={onSelection} />
      ))}
      <div className="flex justify-center md:justify-end pt-6">
        <Button onHandleClick={handleIsAddFriend}>
          {isAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}

function Friend({ friend, onSelection }) {
  return (
    <div className="flex justify-between space-x-4 p-1 items-center hover:bg-orange-100 hover:rounded-lg duration-100">
      <div className="flex space-x-5">
        <img src={friend.image} className="rounded-full" alt="" />
        <div>
          <p className="font-bold">{friend.name}</p>
          <p
            className={`${
              friend.balance > 0
                ? "text-green-500"
                : friend.balance < 0
                ? "text-red-600"
                : "text-black"
            }`}
          >
            {friend.balance > 0
              ? `${friend.name} owe you ${friend.balance}`
              : friend.balance < 0
              ? `You owe ${friend.name} ${friend.balance}`
              : `You and ${friend.name} are even ${friend.balance}`}
          </p>
        </div>
      </div>
      <div>
        <Button onHandleClick={onSelection}>Select</Button>
      </div>
    </div>
  );
}

function SplitFriend() {
  return (
    <div className="bg-orange-100 md:w-2/3 p-5 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Split a Bill with Sarah</h1>
      <div className="flex flex-col space-y-4 relative">
        <div className="flex justify-between items-center">
          <p>
            <span className="w-10 h-10 p-1">💲</span>
            <span>Bill value</span>
          </p>
          <input type="text" className="w-20 h-7 text-center border" />
        </div>

        <div className="flex justify-between items-center">
          <p>
            <span className="w-10 h-10 p-1">🧍‍♂️</span>
            <span>Your expense</span>
          </p>
          <input type="text" className="w-20 h-7 text-center border" />
        </div>

        <div className="flex justify-between items-center">
          <p>
            <span className="w-10 h-10 p-1">👩🏻‍🤝‍🧑🏻</span>
            <span>Sara's expense</span>
          </p>
          <input
            type="text"
            disabled
            value={23}
            className="w-20 h-7 text-center border"
          />
        </div>

        <div className="flex justify-between items-center">
          <p>
            <span className="w-10 h-10 p-1">🤑</span>
            <span>Who's paying the bill?</span>
          </p>
          <select name="" id="" className="w-20 h-7 text-center border">
            <option value="You">You</option>
            <option value="Sarah">Sarah</option>
          </select>
        </div>

        <div className="flex justify-end pt-3">
          <Button>Split Bill</Button>
        </div>
      </div>
    </div>
  );
}

function AddFriend({ handleAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // if (!name || !image) return;

  const id = crypto.randomUUID();
  console.log(id);

  const friend = {
    name,
    image,
    id,
    balance: 0,
  };

  return (
    <div className="flex flex-col p-4 space-y-4 bg-orange-100 md:w-2/3 md:row-start-2 mx-auto">
      <div className="flex justify-between">
        <p className="space-x-1">
          <span>👩🏻‍🤝‍🧑🏽</span>

          <span>friend name</span>
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="h-7 text-center"
        />
      </div>
      <div className="flex justify-between">
        <p className="space-x-1">
          <span>🎴</span>
          <span>image URL</span>
        </p>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="h-7 text-center"
        />
      </div>
      <div className="flex justify-end">
        <Button onHandleClick={handleAddfriend(friend)}>Add</Button>
      </div>
    </div>
  );
}

function Button({ children, onHandleClick }) {
  return (
    <button
      onClick={onHandleClick}
      className="bg-orange-400 hover:bg-opacity-70 rounded-lg p-1 px-6 font-bold"
    >
      {children}
    </button>
  );
}
