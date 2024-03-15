export const switchBg = (raffle: string) => {
  switch (raffle) {
    case "mega-sena":
      return "bg-[#6BEFA3]";
    case "quina":
      return "bg-[#8666EF]";
    case "lotofacil":
      return "bg-[#DD7AC6]";
    case "lotomania":
      return "bg-[#FFAB64]";
    case "timemania":
      return "bg-[#5AAD7D]";
    case "dia de sorte":
      return "bg-[#BFAF83]";
    default:
      return "bg-[#6BEFA3]";
  }
};
