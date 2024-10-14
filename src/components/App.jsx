import { useState } from "react";
import Button from "./Button";
import AddFriend from "./AddFriend";
import FriendList from "./FriendList";
import SplitForm from "./SplitForm";

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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(el) {
    setSelectedFriend((cur) => (cur?.id === el.id ? null : el));
    setShowAddFriend(false);
  }

  return (
    <div className="container mx-auto md:px-12 py-16 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col md:row-span-2">
        <FriendList
          friends={friends}
          onSelected={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <AddFriend handleAddFriend={handleAddFriend} />}

        <div className="flex justify-end mt-7 ms-40 md:ms-24 w-1/2">
          <Button onClickBtn={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
      </div>

      {selectedFriend && <SplitForm selectedFriend={selectedFriend} />}
    </div>
  );
}
