type IconCredit = {
  name: string;
  url: string;
};

const iconCredits: IconCredit[] = [
  {
    name: "Gold pouch icon by Candy Design",
    url: "<https://www.flaticon.com/free-icons/coin",
  },
  {
    name: "Dragon icon by Icongeek26",
    url: "https://www.flaticon.com/free-icons/dragon",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerCopyright">
        © {year} ImperialFiddlesticks. All rights reserved.
      </div>
      <div className="footerCredits">
        <span>Icon credits:</span>
        <ul>
          {iconCredits.map((credit) => (
            <li key={credit.url}>
              <a href={credit.url} target="_blank" rel="noopener noreferrer">
                {credit.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
