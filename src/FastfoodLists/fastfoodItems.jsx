import FastfoodItem from "./fastfoodItem";

const FastfoodItems = ({ fastfoodItems }) => {
  let delay = 0.3;
  return (
    <div className="w-full px-20 my-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {fastfoodItems.map((food) => {
        delay += 0.031;
        return <FastfoodItem key={food.id} {...food} delay={delay} />;
      })}
    </div>
  );
};

export default FastfoodItems;
