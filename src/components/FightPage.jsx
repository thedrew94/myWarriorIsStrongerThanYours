import warrior from "../assets/warrior.png";

export default function FightPage() {
  return (
    <div>
      <div className="warrior">
        <img src={warrior} alt="Warrior image" />
        <div className="warrior_action_btns"></div>
      </div>
      <div className="warrior">
        <img src={warrior} alt="Warrior image" />
      </div>
    </div>
  );
}
