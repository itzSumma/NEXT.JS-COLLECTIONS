const DashboardPage = () => {
  return (
    <div className="space-y-6 text-black dark:text-white">

      {/* Welcome Section */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold">
          Welcome to Dashboard 👋
        </h1>

        <p className="text-gray-700 dark:text-gray-200 mt-2 font-medium">
          This is your control panel where you can manage books and foods.
          You can explore all items, check details, and organize your content easily.
        </p>

        <div className="mt-4 flex gap-4 text-sm">
          <span className="px-3 py-1 bg-emerald-600 text-white rounded-full">
            Manage Data
          </span>
          <span className="px-3 py-1 bg-teal-700 text-white rounded-full">
            View Collections
          </span>
          <span className="px-3 py-1 bg-sky-700 text-white rounded-full">
            Responsive UI
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 
        rounded-xl border border-gray-200 dark:border-zinc-700
        transition-all duration-300 hover:shadow-md hover:-translate-y-1 
        hover:bg-emerald-200 dark:hover:bg-emerald-800/30">

          <h2 className="text-xl font-semibold">Books Library</h2>
          <p className="text-gray-700 font-medium dark:text-gray-300 mt-1">
            Explore fiction, fantasy, classics and more with ratings.
          </p>
          <p className="mt-3 text-2xl font-bold text-emerald-700 dark:text-emerald-400">
            9+ Books
          </p>
        </div>

        <div className="p-6 bg-teal-50 dark:bg-teal-900/20 
        rounded-xl border border-gray-200 dark:border-zinc-700
        transition-all duration-300 hover:shadow-md hover:-translate-y-1 
        hover:bg-teal-200 dark:hover:bg-teal-800/30">

          <h2 className="text-lg font-semibold">Food Collection</h2>
          <p className="text-gray-700 font-medium dark:text-gray-300 mt-1">
            Browse delicious food items with ratings and details.
          </p>
          <p className="mt-3 text-2xl font-bold text-teal-700 dark:text-teal-400">
            10+ Foods
          </p>
        </div>

        <div className="p-6 bg-sky-50 dark:bg-sky-900/20 
        rounded-xl border border-gray-200 dark:border-zinc-700
        transition-all duration-300 hover:shadow-md hover:-translate-y-1 
        hover:bg-sky-200 dark:hover:bg-sky-800/30">

          <h2 className="text-lg font-semibold">Performance</h2>
          <p className="font-medium text-gray-700 dark:text-gray-300 mt-1">
            Fast loading UI with smooth navigation experience.
          </p>
          <p className="mt-3 text-2xl font-bold text-sky-700 dark:text-sky-400">
            100%
          </p>
        </div>

      </div>

      {/* Quick Info Section */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow
      transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
      hover:bg-purple-200 dark:hover:bg-purple-900/30">

        <h2 className="text-xl font-semibold mb-2">
          Quick Overview
        </h2>

        <ul className="space-y-2 font-medium text-gray-500 dark:text-gray-200">
          <li>✔ You can browse all books from Book section</li>
          <li>✔ Food section shows different food items with ratings</li>
          <li>✔ Each card has smooth hover animation</li>
          <li>✔ Fully responsive dashboard layout</li>
        </ul>

      </div>

    </div>
  );
};

export default DashboardPage;