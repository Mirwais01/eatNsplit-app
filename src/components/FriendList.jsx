import Friend from "./Friend";
export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <div className="md:w-2/3 mx-2">
      <ul className="space-y-2">
        {friends.map((el) => (
          <Friend
            el={el}
            key={el.id}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
