import FastfoodItems from "./FastfoodLists/fastfoodItems";

const Content = ({ fastfoodItems }) => {
  if (!Boolean(fastfoodItems.length)) {
    return (
      <div className="w-full flex flex-col items-center py-2 gap-y-2">
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
    <>
      <FastfoodItems fastfoodItems={fastfoodItems} />
    </>
  );
};

export default Content;
