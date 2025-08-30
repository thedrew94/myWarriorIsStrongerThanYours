export default function WarriorStats() {
  return (
    <div className="warrior_stats">
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
        <li>
          <h5>MANA</h5>
          <h6>1030</h6>
        </li>
        <li>
          <h5>LUCK</h5>
          <h6>1%</h6>
        </li>
      </ul>
    </div>
  );
}
