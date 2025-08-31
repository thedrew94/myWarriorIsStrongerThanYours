import exp from "../assets/exp.png";

export default function TopInfoBar() {
  return (
    <div className="top_infobar">
      <div className="warrior_numb_container">
        <button className="warrior_numb warrior_numb_sltd">1</button>
        <button className="warrior_numb">2</button>
        <button className="warrior_numb">3</button>
      </div>
      <div className="player_info">
        <div className="player_info_stat">
          <img src={exp} alt="Experience icon" width={"38px"} height={"38px"} />
          <h6>PlayerUsername</h6>
        </div>
        <div className="player_info_stat">
          <img src={exp} alt="Experience icon" width={"38px"} height={"38px"} />
          <h6>9,999</h6>
        </div>
      </div>
    </div>
  );
}
