import NavBar from "./NavBar";
import WarriorPreview from "./WarriorPreview";
import WarriorSkills from "./WarriorSkills";
import WarriorStats from "./WarriorStats";

export default function HomePage() {
  return (
    <>
      <WarriorPreview />
      {/* <WarriorStats /> */}
      <WarriorSkills />
      <NavBar />
    </>
  );
}
