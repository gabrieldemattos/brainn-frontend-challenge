interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <div className="w-full min-h-[50%] flex flex-col justify-around items-center py-10 gap-10 lg:h-full lg:justify-between lg:py-20 lg:w-[60%] lg:gap-10 lg:px-5">
      {children}
    </div>
  );
};

export default NumberContainer;
