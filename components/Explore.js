function Explore({ articles }) {
  console.log(articles);
  return (
    <div className="grid grid-cols-3 gap-[10px] lg:grid-cols-4 gap-y-[15px]">
      {articles.map((place) => {
        return (
          <div  key={place.id} className="flex px-[3px]  items-center gap-x-[8px] justify-start ">
            <div className="w-[39px] h-[35px] rounded-md">
              <img
                src={place.img}
                alt=""
                className="w-full h-full object-fit rounded-md"
              />
            </div>
            <div className="flex mr-auto flex-col font-thin justify-center">
              <p  className="text-[11px] font-medium">London</p>
              <p className="text-[11px]">45 minute drive</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Explore;
