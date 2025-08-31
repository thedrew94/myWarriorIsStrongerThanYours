import warrior from "../assets/warrior.png";
import EquipmentSlot from "./EquipmentSlot";

export default function WarriorPreview() {
  return (
    <div className="warrior_preview">
      <div className="warrior_preview_ul">
        <EquipmentSlot isEmpty={false} slotType={"weapon"} />
        <EquipmentSlot isEmpty={true} slotType={"helmet"} slotData={""} />
        <EquipmentSlot isEmpty={true} slotType={"armour"} />
        <EquipmentSlot isEmpty={true} slotType={"armour"} />
      </div>
      <div className="warrior_slot">
        <div className="warrior">
          <img src={warrior} alt="Warrior image" />
        </div>
        <div className="warrior_consumables">
          <EquipmentSlot isEmpty={true} slotType={"armour"} slotSize={"small"} />
          <EquipmentSlot isEmpty={true} slotType={"armour"} slotSize={"small"} />
          <EquipmentSlot isEmpty={true} slotType={"armour"} slotSize={"small"} />
        </div>
        <div className="warrior_action_btns">
          <div className="warrior_info">
            <h6>Dark Knight</h6>
            <button>i</button>
          </div>
          <button className="start_fight_btn">Start fight!</button>
        </div>
      </div>
      <div className="warrior_preview_ul">
        <EquipmentSlot isEmpty={true} slotType={"shoes"} />
        <EquipmentSlot isEmpty={true} slotType={"default"} />
        <EquipmentSlot isEmpty={true} slotType={"default"} />
      </div>
    </div>
  );
}
