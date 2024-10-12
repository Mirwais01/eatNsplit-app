import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ initialFriends }) {
  const [friends, setFriends] = useState(initialFriends);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const id = crypto.randomUUID();
  const newfriend = {
    id,
    name,
    image,
    balance: 0,
  };

  function handleSubmitForm(e) {
    e.preventDefault();
    setFriends((friends) => [...friends, newfriend]);
    setName("");
    setImage("");
  }

  return (
    <form
      action=""
      className="p-4 flex space-y-7 flex-col mx-5 md:w-2/3 mt-8 rounded-lg bg-orange-100"
      onSubmit={(e) => handleSubmitForm(e)}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center space-x-2">
          <label htmlFor="" className="font-bold text-sm md:text-base">
            👩🏻‍🤝‍🧑🏻Friend's name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border border-orange-300 py-1 outline-0 text-center"
          />
        </div>

        <div className="flex justify-between items-center space-x-2">
          <label htmlFor="" className="font-bold text-sm md:text-base">
            🎴Friend's image
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="border border-orange-300 py-1 outline-0 text-center"
          />
        </div>
      </div>

      <Button>Add</Button>
    </form>
  );
}
