import cap from "../assets/clothes/69_d.png";
import sword from "../assets/melee_weapon/64.png";

export default function WarriorSkills() {
  return (
    <>
      <div className="warrior_skills_nav">
        <button className="warrior_skills_sltd">
          <img src={cap} alt="" width={"32px"} />
        </button>
        <button>
          <img src={cap} alt="" width={"32px"} />
        </button>
      </div>
      <ul className="warrior_skills">
        <li className="warrior_skill_li">
          <div>
            <img src={sword} alt="" width={"64px"} />
          </div>
          <div className="warrior_skills_info">
            <h6>Attaco a Sorpresa</h6>
            <p>10 danni HP</p>
            <p>30 danni SCUDO</p>
          </div>
          <button className="skill_btn">SBLOCCA</button>
        </li>
        <li className="warrior_skill_li">
          <div>
            <img src={sword} alt="" width={"64px"} />
          </div>
          <div className="warrior_skills_info">
            <h6>Attaco a Sorpresa</h6>
            <p>10 danni HP</p>
            <p>30 danni SCUDO</p>
          </div>
          <button className="skill_btn">SBLOCCA</button>
        </li>
      </ul>
    </>
  );
}
