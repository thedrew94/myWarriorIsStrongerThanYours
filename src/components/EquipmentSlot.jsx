import weapon from "../assets/melee_weapon/11_a.png";
import shoes from "../assets/shoe.png";
import armour from "../assets/armour.png";
import sword from "../assets/sword.png";
import shield from "../assets/shield.png";

// const slotTypes = ["weapon", "helmet", "armour", "shoes", "accessory_neck", "accessory_hand", "default"];

const slotTypes = {
  weapon: sword,
  helmet: shield,
  armour: armour,
  shoes: shoes,
  accessory_neck: sword,
  accessory_hand: sword,
  default: sword,
};

export default function EquipmentSlot({
  isEmpty = true,
  slotType = "default",
  slotData = { slotImg: "weapon" },
  slotSize = "default",
}) {
  const currSlotType = isEmpty && slotTypes[slotType];

  return (
    <div
      className={`equipment_slot ${isEmpty ? "equipment_slot_empty" : "equipment_slot_assigned"}`}
      style={{ "--slot-size": `${slotSize === "default" ? "80px" : "60px"}` }}
    >
      <img className="equipment_img" src={currSlotType || weapon} alt="Equipment image" draggable={false} />
      {!isEmpty && (
        <>
          <span className="equipment_lvl"></span>
        </>
      )}
    </div>
  );
}
