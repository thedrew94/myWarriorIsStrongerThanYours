import warrior from "../assets/warrior.png";
import EquipmentSlot from "./EquipmentSlot";

export default function WarriorPreview() {
  return (
    <div className="warrior_preview">
      <div className="warrior_preview_ul">
        <EquipmentSlot isEmpty={true} />
        <EquipmentSlot isEmpty={false} />
        <EquipmentSlot isEmpty={true} />
      </div>
      <div className="warrior">
        <img src={warrior} alt="Warrior image" />
        <div className="warrior_info">
          <h6>Dark Knight</h6>
          <button>I</button>
        </div>
      </div>
      <div className="warrior_preview_ul">
        <EquipmentSlot isEmpty={true} />
        <EquipmentSlot isEmpty={false} />
        <EquipmentSlot isEmpty={true} />
      </div>
    </div>
  );
}
