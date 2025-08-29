import EquipmentSlot from "./components/EquipmentSlot";

function App() {
  return (
    <>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <EquipmentSlot isEmpty={true} />
      <EquipmentSlot isEmpty={false} />
    </>
  );
}

export default App;
