import FastfoodItem from "./FastfoodLists/fastfoodItem";

const Content = ({ fastfoodItems }) => {
  let delay = 0.3;
  if (!Boolean(fastfoodItems.length)) {
    return (
      <div className="w-full mt-60 flex flex-col items-center py-2 gap-y-2">
        <div className="pt-8 text-xl font-bold text-center text-purple-600">
          موردی یافت نشد
        </div>
        <img
          className="w-auto h-96"
          src="src/assets/gift/Enjoy Food.gif"
          alt="404"
        />
      </div>
    );
  }
  return (
    <div className="w-full mt-60 px-20 my-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {fastfoodItems.map((food) => {
        delay += 0.031;
        return <FastfoodItem key={food.id} {...food} delay={delay} />;
      })}
    </div>
  );
};

export default Content;
