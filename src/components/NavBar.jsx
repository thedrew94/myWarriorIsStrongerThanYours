import { useState } from "react";

export default function NavBar() {
  const [activeBtnIdx, setActiveBtnIdx] = useState(1);

  return (
    <nav className="navbar">
      <button className={`${activeBtnIdx === 1 && "navbar_btn_sltd"}`} onClick={() => setActiveBtnIdx(1)}>
        WARRIOR
      </button>
      <button className={`${activeBtnIdx === 2 && "navbar_btn_sltd"}`} onClick={() => setActiveBtnIdx(2)}>
        SKLLS
      </button>
      <button className={`${activeBtnIdx === 3 && "navbar_btn_sltd"}`} onClick={() => setActiveBtnIdx(3)}>
        STORY
      </button>
      <button className={`${activeBtnIdx === 4 && "navbar_btn_sltd"}`} onClick={() => setActiveBtnIdx(4)}>
        FRIENDS
      </button>
      <button className={`${activeBtnIdx === 5 && "navbar_btn_sltd"}`} onClick={() => setActiveBtnIdx(5)}>
        INVENTORY
      </button>
    </nav>
  );
}
