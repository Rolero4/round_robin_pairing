import "./Header.scss";

const Header = ({ text }: { text: string }) => {
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
