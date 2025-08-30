import chest from "../assets/chest.png";

export default function MainNavbar() {
  return (
    <nav className="main_navbar">
      <button>
        <img src={chest} alt="" />
        <h6>Negozio</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Negozio</h6>
      </button>
      <button className="fight_btn">
        <img src={chest} alt="" />
        <h6>Duello</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Negozio</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Negozio</h6>
      </button>
    </nav>
  );
}
