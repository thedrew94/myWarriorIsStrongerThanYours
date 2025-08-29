// {
//   isEmpty: boolean;
//   slotType: "weapon" | "helmet" | "armour" | "shoes" | "accessory_neck" | "accessory_hand" | "default"
// }

export default function EquipmentSlot({ isEmpty = true, slotType = "default" }) {
  return (
    <div className={`equipment_slot ${isEmpty ? "equipment_slot_empty" : "equipment_slot_assigned"}`}>
      {!isEmpty && (
        <>
          <img className="equipment_img" src="" alt="Equipment image" draggable={false} />
          <span className="equipment_lvl"></span>
        </>
      )}
    </div>
  );
}
