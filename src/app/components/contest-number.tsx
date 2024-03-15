interface ContestNumberProps {
  contestNumber: string;
  contestDate: string;
}

const ContestNumber = ({ contestNumber, contestDate }: ContestNumberProps) => {
  return (
    <div>
      <p className="uppercase font-medium text-sm text-white lg:hidden">
        concurso nº {contestNumber}
      </p>

      <div className="hidden lg:flex flex-col gap-2">
        <p className="uppercase font-medium text-sm text-white">concurso</p>

        <p className="font-bold text-xl text-white">
          {contestNumber} - {contestDate}
        </p>
      </div>
    </div>
  );
};

export default ContestNumber;
