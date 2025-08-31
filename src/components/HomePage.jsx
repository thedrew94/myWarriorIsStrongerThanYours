import NavBar from "./NavBar";
import TopInfoBar from "./TopInfoBar";
import WarriorPreview from "./WarriorPreview";
import WarriorSkills from "./WarriorSkills";
import WarriorStats from "./WarriorStats";

export default function HomePage() {
  return (
    <>
      <TopInfoBar />
      <WarriorPreview />
      <WarriorStats />
      {/* <WarriorSkills /> */}
      <NavBar />
    </>
  );
}
