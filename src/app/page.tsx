"use client";

import { useState } from "react";
import Container from "./components/container";
import { switchBg } from "./helpers/switch-bg";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("megasena");

  const options = [
    {
      value: "megasena",
      label: "Mega-Sena",
    },
    {
      value: "quina",
      label: "Quina",
    },
    {
      value: "lotofacil",
      label: "Lotofacil",
    },
    {
      value: "lotomania",
      label: "Lotomania",
    },
    {
      value: "timemania",
      label: "Timemania",
    },
    {
      value: "diadesorte",
      label: "Dia de Sorte",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Container bg={switchBg(selectedValue)}>
        <div>
          <select
            className="uppercase font-medium rounded shadow p-3 text-[#333333] outline-none"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center gap-3">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.517 63.154C23.9663 63.149 26.3139 62.1738 28.0458 60.4419C29.7777 58.7099 30.753 56.3624 30.758 53.913V33.271H9.20598C7.85103 33.2875 6.51627 33.6017 5.29626 34.1914C4.07625 34.7811 3.00083 35.6318 2.14619 36.6834C1.29155 37.7349 0.678594 38.9615 0.350749 40.2763C0.0229029 41.5911 -0.0118135 42.9619 0.249059 44.2916C0.509931 45.6213 1.06001 46.8774 1.86033 47.9708C2.66064 49.0643 3.69162 49.9684 4.88022 50.6191C6.06882 51.2698 7.38596 51.6511 8.73834 51.7361C10.0907 51.8212 11.4453 51.6077 12.706 51.111C12.2637 52.4966 12.155 53.967 12.3887 55.4026C12.6223 56.8381 13.1917 58.1982 14.0505 59.372C14.9093 60.5458 16.0332 61.5002 17.3307 62.1574C18.6282 62.8147 20.0625 63.1561 21.517 63.154ZM42.623 0.754034C40.1738 0.759319 37.8265 1.73465 36.0948 3.46656C34.3631 5.19847 33.388 7.54588 33.383 9.99503V30.635H54.932C56.2863 30.6178 57.6203 30.303 58.8395 29.7131C60.0587 29.1231 61.1333 28.2724 61.9873 27.221C62.8412 26.1697 63.4536 24.9435 63.7811 23.6293C64.1086 22.315 64.1432 20.9448 63.8825 19.6157C63.6217 18.2866 63.072 17.0311 62.2722 15.938C61.4724 14.8449 60.4421 13.941 59.2542 13.2902C58.0663 12.6395 56.7499 12.2578 55.3982 12.1722C54.0465 12.0867 52.6924 12.2993 51.432 12.795C51.8738 11.4097 51.9822 9.93971 51.7485 8.50458C51.5148 7.06945 50.9455 5.70979 50.087 4.53627C49.2284 3.36275 48.1049 2.40853 46.8079 1.75129C45.5109 1.09405 44.077 0.752363 42.623 0.754034Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.517 0.754037C23.9663 0.759058 26.3139 1.73427 28.0458 3.46621C29.7778 5.19815 30.753 7.54572 30.758 9.99504V30.636H9.20601C7.85167 30.6188 6.51769 30.3041 5.29848 29.7141C4.07928 29.1241 3.00466 28.2734 2.15071 27.222C1.29677 26.1707 0.684364 24.9445 0.356859 23.6303C0.0293538 22.316 -0.0052457 20.9458 0.25551 19.6167C0.516265 18.2876 1.066 17.0321 1.8658 15.939C2.66559 14.8459 3.6959 13.942 4.88377 13.2912C6.07165 12.6405 7.38805 12.2588 8.73979 12.1732C10.0915 12.0877 11.4456 12.3003 12.706 12.796C12.264 11.4105 12.1554 9.9402 12.3891 8.50478C12.6229 7.06937 13.1923 5.70945 14.0511 4.53576C14.9099 3.36207 16.0337 2.40779 17.3311 1.75063C18.6284 1.09346 20.0627 0.752 21.517 0.754037ZM42.623 63.154C40.1736 63.149 37.826 62.1736 36.0942 60.4414C34.3624 58.7093 33.3875 56.3614 33.383 53.912V33.271H54.932C56.287 33.2875 57.6217 33.6017 58.8417 34.1914C60.0617 34.7811 61.1372 35.6318 61.9918 36.6834C62.8464 37.7349 63.4594 38.9615 63.7872 40.2763C64.1151 41.5911 64.1498 42.9619 63.8889 44.2916C63.6281 45.6213 63.078 46.8774 62.2777 47.9708C61.4773 49.0643 60.4464 49.9684 59.2578 50.6191C58.0692 51.2698 56.752 51.6511 55.3997 51.7361C54.0473 51.8212 52.6927 51.6077 51.432 51.111C51.8742 52.4964 51.9829 53.9667 51.7494 55.4021C51.5159 56.8375 50.9466 58.1974 50.0881 59.3712C49.2295 60.545 48.1058 61.4994 46.8086 62.1568C45.5114 62.8141 44.0773 63.1558 42.623 63.154Z"
              fill="white"
            />
          </svg>

          <h1 className="uppercase font-bold text-white text-3xl">mega-sena</h1>
        </div>

        <div>
          <p className="uppercase font-medium text-sm text-white">
            concurso nº 4560
          </p>
        </div>
      </Container>
      <div className="bg-[#F2F2F2] w-full h-[50%] flex flex-col justify-evenly items-center px-12">
        <div className="flex gap-6 h-fit flex-wrap justify-center">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>

          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>

          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>

          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>

          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>

          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl">
            06
          </div>
        </div>

        <div>
          <p className="font-medium text-sm text-center">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </p>
        </div>
      </div>
    </div>
  );
}
