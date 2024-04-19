const Search = () => {
  return (
    <>
      <div className="mt-36">
        <h1 className="text-4xl text-center font-bold text-gray-800">الدليل الرقمي</h1>
        <div>
          <form className="mt-8 mx-auto max-w-lg">
            <div className="flex items-center border rounded-lg">
              <input
                type="text"
                placeholder="Search for a category..."
                className="px-4 py-2 flex-1 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;

