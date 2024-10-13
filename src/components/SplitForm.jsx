import Button from "./Button";

export default function SplitForm({ selectedFriend }) {
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
          type="text"
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          🧍‍♂️ Your expense
        </label>
        <input
          type="text"
          className="md:w-32 w-20 border border-orange-300 text-center md:py-1 outline-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <label htmlFor="" className="text-sm md:text-lg">
          👩🏻‍🤝‍🧑🏻 {selectedFriend.name}'s expense
        </label>
        <input
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
        >
          <option value="">You</option>
          <option value="">{selectedFriend.name}</option>
        </select>
      </div>

      <div className="flex justify-end pt-3 items-center">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}
