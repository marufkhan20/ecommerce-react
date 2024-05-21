const FeedBack = ({ feedback = "" }) => {
  return (
    <div className="p-5 border border-border rounded-lg transition-all hover:bg-[#F9FAFB]">
      <div className="flex items-center gap-3">
        <img
          src="/images/users/1.jpeg"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-sm">
          <h3 className="font-normal text-black">John Doe</h3>
          <span className="text-body">CEO, Vercel</span>
        </div>
      </div>
      <p className="text-sm mt-3">{feedback}</p>
    </div>
  );
};

export default FeedBack;
