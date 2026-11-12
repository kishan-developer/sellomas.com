import Gear from "./Gear";

export default function Logo() {
  return (
    <span className="logo">
      <Gear teeth={10} className="logo-mark" />
      <span className="logo-text">Sellomas</span>
    </span>
  );
}
