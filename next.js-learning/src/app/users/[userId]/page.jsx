


const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await res.json();
    // console.log("User ID from params:", userId);
  return (
    <div className="text-center mt-5 space-y-2">
      <h1 className="text-3xl font-bold  ">User Details</h1>
     <h2 className="text-xl font-semibold">{user.name}</h2>
     <p className="text-gray-400 text-md  ">{user.email}</p>
     <p>{user.phone}</p>
        <p>{user.website}</p>

    </div>
  );
};

export default UserDetailsPage;
