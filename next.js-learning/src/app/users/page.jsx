import Link from "next/link";


 
export const metadata={
  title: 'All Users',
  description: 'all the information about users',
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      {/* header */}
      <div className="text-purple-800 text-center text-2xl mb-6">
        <h2>Users are coming soon!</h2>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="card bg-neutral text-neutral-content"
          >
            <div className="card-body items-center text-center bg-purple-700 border border-gray-400 rounded-xl">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>

              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;