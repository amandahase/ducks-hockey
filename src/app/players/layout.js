import Header from "../components/header";

export default function PlayersLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
