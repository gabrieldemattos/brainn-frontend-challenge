interface ContainerProps {
  children: React.ReactNode;
  bg: string;
}
const Container = ({ bg, children }: ContainerProps) => {
  return (
    <div
      className={`${bg} w-full h-[50%] flex flex-col items-center justify-around lg:h-full lg:justify-between lg:py-20 lg:w-[40%]`}
    >
      {children}
    </div>
  );
};

export default Container;
