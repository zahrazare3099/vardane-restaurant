const Header = ({ children }) => {
  return (
    <div className="w-full bg-gray-600 text-orange-500 h-44 relative mb-8">
      <h1 className="absolute top-10 px-12 text-xl w-full text-end">
        کافه رستوران وردنه
      </h1>
      <img
        className="object-fill bg-no-repeat h-44 w-full"
        src="src/assets/images/logoFirst.jpg"
        alt="logo"
      />
      <div className="w-full px-20 absolute -bottom-14 md:-bottom-10">
        {children}
      </div>
    </div>
  );
};
export default Header;
