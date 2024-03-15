interface RaffleBallProps {
  number: number | string;
}

const RaffleBall = ({ number }: RaffleBallProps) => {
  return (
    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl lg:w-24 lg:h-24 lg:text-2xl animate-from-bottom shadow-lg">
      {number}
    </div>
  );
};

export default RaffleBall;
