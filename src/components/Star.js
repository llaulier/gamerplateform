export const getStar = d => {
  const star = " \u2605 ";
  const noStar = "\u2606 ";
  return d > 4.5
    ? star.repeat(5)
    : d > 4
    ? star.repeat(4) + noStar
    : d > 3
    ? star.repeat(3) + noStar.repeat(2)
    : d > 2
    ? star.repeat(2) + noStar.repeat(3)
    : noStar;
};
