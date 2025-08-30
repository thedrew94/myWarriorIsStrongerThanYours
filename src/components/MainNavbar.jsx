import chest from "../assets/chest.png";

export default function MainNavbar() {
  return (
    <nav className="main_navbar">
      <button>
        <img src={chest} alt="" />
        <h6>Inventario</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Mercato</h6>
      </button>
      <button className="fight_btn">
        <img src={chest} alt="" />
        <h6>Guerriero</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Amici</h6>
      </button>
      <button>
        <img src={chest} alt="" />
        <h6>Impostazioni</h6>
      </button>
    </nav>
  );
}
