const banner = () => {
  return (
    <div>
      <div class=" p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="rounded-xl h-40 flex flex-col items-center justify-center text-white
                bg-gradient-to-r from-purple-600 to-purple-400"
          >
            <p class="text-lg">In Progress</p>
            <h1 class="text-4xl font-bold mt-2">0</h1>
          </div>

          <div
            class="rounded-xl h-40 flex flex-col items-center justify-center text-white
                bg-gradient-to-r from-green-500 to-teal-600"
          >
            <p class="text-lg">Resolved</p>
            <h1 class="text-4xl font-bold mt-2">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
