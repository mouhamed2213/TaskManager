const TaskCard = ({ children }: any) => {
  return (
    <>
      <div className="w-full bg-white  rounded-lg  shadow-lg p-6 ">
        {children}
      </div>
    </>
  );
};

export default TaskCard;
