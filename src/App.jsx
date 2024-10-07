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
  return (
    <div className="container px-4 mx-auto md:space-x-12 space-y-5 md:space-y-0 flex flex-col md:flex-row my-16">
      <FriendList />
      <SplitFriend />
    </div>
  );
}

export default App;

function FriendList() {
  return (
    <div className="p-3 flex flex-col md:w-1/3">
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
}

function Friend() {
  return (
    <div className="flex justify-between p-3 items-center hover:bg-orange-100 hover:rounded-lg duration-100">
      <div className="flex space-x-5">
        <img
          src="https://i.pravatar.cc/48?u=118836"
          className="rounded-full"
          alt=""
        />
        <div>
          <p className="font-bold">Clark</p>
          <p>You owe to clark</p>
        </div>
      </div>
      <div>
        <button className="bg-orange-400 hover:bg-opacity-70 rounded-lg p-1 px-4 font-bold">
          Select
        </button>
      </div>
    </div>
  );
}

function SplitFriend() {
  return (
    <div className="bg-orange-100 p-6 md:w-1/3 w-full">
      <h1 className="text-2xl font-bold mb-5">Split a Bill with Sarah</h1>
      <div className="flex flex-col space-y-4">
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
          <input type="text" className="w-20 h-7 text-center border" />
        </div>

        <div className="flex justify-between items-center">
          <p>
            <span className="w-10 h-10 p-1">🤑</span>
            <span>Who's paying the bill?</span>
          </p>
          <input type="number" className="w-20 h-7 text-center border" />
        </div>
      </div>
    </div>
  );
}
