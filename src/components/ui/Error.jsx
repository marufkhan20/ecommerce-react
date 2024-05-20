const Error = ({ children }) => {
  return children ? (
    <div>
      <p className="text-red-500 text-sm font-semibold">{children}</p>
    </div>
  ) : (
    <></>
  );
};

export default Error;
