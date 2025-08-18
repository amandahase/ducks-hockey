import Header from "../components/header";

export default function GamesLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
