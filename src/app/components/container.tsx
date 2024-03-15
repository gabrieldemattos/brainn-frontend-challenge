interface ContainerProps {
  children: React.ReactNode;
  bg: string;
}
const Container = ({ bg, children }: ContainerProps) => {
  return (
    <div
      className={`${bg} w-full h-[50%] flex flex-col items-center justify-around`}
    >
      {children}
    </div>
  );
};

export default Container;
