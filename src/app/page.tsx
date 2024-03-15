"use client";

import { useEffect, useState } from "react";
import Container from "./components/container";
import { switchBg } from "./helpers/switch-bg";
import RaffleName from "./components/raffle-name";
import ContestNumber from "./components/contest-number";
import NumberContainer from "./components/number-container";
import RaffleBall from "./components/raffle-ball";

interface Raffle {
  contest_date: string;
  drawn_numbers: string[];
  name: string;
  contest_number: string;
}

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("megasena");
  const [raffle, setRaffle] = useState<Raffle>({} as Raffle);

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

  useEffect(() => {
    if (selectedValue) {
      const fetchRaffle = async () => {
        const response = await fetch(
          `https://apiloterias.com.br/app/v2/resultado?loteria=${selectedValue}&token=kJdfLjd38Jai2ek`
        );

        const data = await response.json();

        setRaffle({
          contest_date: data.data_concurso,
          drawn_numbers: data.dezenas,
          name: data.nome,
          contest_number: data.numero_concurso,
        });
      };

      fetchRaffle();
    }
  }, [selectedValue]);

  return (
    <div className="w-full h-screen lg:flex bg-[#F2F2F2]">
      {raffle && (
        <>
          <Container bg={switchBg(selectedValue)}>
            <div>
              <select
                className="uppercase font-medium rounded shadow p-3 text-[#333333] outline-none lg:px-5 py-2"
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

            <RaffleName raffleName={raffle.name} />

            <ContestNumber
              contestNumber={raffle.contest_number}
              contestDate={raffle.contest_date}
            />
          </Container>

          <NumberContainer>
            <div className="hidden lg:block"></div>

            <div
              data-drawn-length={raffle.drawn_numbers?.length}
              className="flex gap-3 items-center flex-wrap justify-center px-12 lg:p-0 lg:gap-8"
            >
              {raffle.drawn_numbers?.map((number, index) => (
                <RaffleBall key={index} number={number} />
              ))}
            </div>

            <div className="px-20">
              <p className="font-medium text-sm text-center">
                Este sorteio é meramente ilustrativo e não possui nenhuma
                ligação com a CAIXA.
              </p>
            </div>
          </NumberContainer>
        </>
      )}
    </div>
  );
}
