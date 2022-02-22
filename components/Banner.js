
function Banner() {
  return (
    <div className="relative h-[300px] w-full">
      <img
        src="/images/banner.jpg" layout="fill"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-2/4 w-full text-center text-white">
        <p>
          Not sure where to go. Perfect.
        </p>
        <button className="text-purple-500 px-2 py-2 rounded-lg shadow-md bg-white mt-[20px] font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible.
        </button>
      </div>
    </div>
  );
}

export default Banner