export default function App() {
  return (
    <div className="container mx-auto py-24">
      {/* sidebar */}
      <FriendList />
    </div>
  );
}

function FriendList() {
  return (
    <div className="bg-red-600 h-10 mx-auto w-full">
      <ul></ul>
    </div>
  );
}

function Friend() {}
