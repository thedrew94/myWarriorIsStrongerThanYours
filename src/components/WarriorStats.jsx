import battle from "../assets/battle.png";

export default function WarriorStats() {
  return (
    <div className="warrior_stats">
      <div className="warrior_stats_info">
        <button className="warrior_stats_btn">
          <img src={battle} alt="" width={"36px"} />
          <h6>1,459</h6>
        </button>
        <button className="warrior_stats_btn">
          <img src={battle} alt="" width={"36px"} />
          <h6>1,459</h6>
        </button>
      </div>
      <span className="warrior_stats_decor"></span>
      <ul className="warrior_stats_col warrior_stats_col_left">
        <li>
          <h5>ATTACK</h5>
          <h6>110</h6>
        </li>
        <li>
          <h5>SP. ATTACK</h5>
          <h6>10</h6>
        </li>
        <li>
          <h5>DEFENSE</h5>
          <h6>200</h6>
        </li>
        <li>
          <h5>SP. DEFENSE</h5>
          <h6>400</h6>
        </li>
        <li>
          <h5>CRITICAL</h5>
          <h6>10%</h6>
        </li>
        <li>
          <h5>SP. CRITICAL</h5>
          <h6>0%</h6>
        </li>
      </ul>
      <ul className="warrior_stats_col warrior_stats_col_right">
        <li>
          <h5>HEALTH</h5>
          <h6>1030</h6>
        </li>
        {/* during combat the warrior has different skills/attacks. Each skill/attack deplets energy and or mana. This stat here increases the initial energy and the ammount of energy the warrior gets each round */}
        <li>
          <h5>STRENGHT</h5>
          <h6>1030</h6>
        </li>
        <li>
          <h5>MANA</h5>
          <h6>1030</h6>
        </li>
        <li>
          <h5>LUCK</h5>
          <h6>1%</h6>
        </li>
        {/* stamina helps with recovaring hearts. if a warrior runs out of hearth can not partecipate in a duel */}
        <li>
          <h5>STAMINA</h5>
          <h6>1%</h6>
        </li>
      </ul>
    </div>
  );
}
