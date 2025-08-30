import weapon from "../assets/melee_weapon/11_a.png";

const slotTypes = ["weapon", "helmet", "armour", "shoes", "accessory_neck", "accessory_hand", "default"];

export default function EquipmentSlot({ isEmpty = true, slotType = "default" }) {
  return (
    <div className={`equipment_slot ${isEmpty ? "equipment_slot_empty" : "equipment_slot_assigned"}`}>
      <img className="equipment_img" src={weapon} alt="Equipment image" draggable={false} />
      {!isEmpty && (
        <>
          <span className="equipment_lvl"></span>
        </>
      )}
    </div>
  );
}
