import Button from "./Button";

export default function Friend({ el, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === el.id;
  // console.log(selectedFriend.id);

  return (
    <li className="flex justify-between items-center px-2 py-3 rounded-lg hover:bg-orange-100 duration-200">
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
        <Button onClickBtn={() => onSelected(el)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
}
