import { useState } from "react";
import Button from "./Button";

export default function SplitForm({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [whosPaying, setWhosPaying] = useState("");
  const payedByUse = bill ? bill - expense : "";

  return (
    <form
      action=""
      className="p-4 bg-orange-100 flex flex-col md:w-3/4 mx-4 mt-11 md:mt-0 md:mx-0 px-8 py-6 rounded-lg space-y-4"
    >
      <h1 className="font-bold text-2xl">
        SPLIT A BILL WITH {selectedFriend.name}
      </h1>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          💲 Bill value
        </label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="text"
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          🧍‍♂️ Your expense
        </label>
        <input
          value={expense}
          onChange={(e) =>
            setExpense(
              Number(e.target.value) > bill
                ? payedByUse
                : Number(e.target.value)
            )
          }
          type="text"
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          👩🏻‍🤝‍🧑🏻 {selectedFriend.name}'s expense
        </label>
        <input
          value={payedByUse}
          type="text"
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
          disabled
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          🤑 Who is paying the bill?
        </label>
        <select
          name=""
          id=""
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
          value={whosPaying}
          onChange={(e) => setWhosPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <div className="flex justify-end pt-3 items-center">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}
