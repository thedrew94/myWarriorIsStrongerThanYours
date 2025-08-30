import NavBar from "./NavBar";
import WarriorPreview from "./WarriorPreview";
import WarriorStats from "./WarriorStats";

export default function HomePage() {
  return (
    <>
      <WarriorPreview />
      <WarriorStats />
      <NavBar />
    </>
  );
}
