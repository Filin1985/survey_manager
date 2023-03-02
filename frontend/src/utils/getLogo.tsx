import AiDriller from "../svg/aidriller.svg"
import PNMR from "../svg/pnmr.svg"
import SB from "../svg/schlumberger.svg"
import SSK from "../svg/ssk.svg"
import Weatherford from "../svg/weatherford.svg"
import BakerHughes from "../svg/bh.svg"

export const getLogo = (name: string): JSX.Element => {
  if (name === "Baker Hughes")
    return <img src={BakerHughes} alt="BH" style={{ marginRight: "0.5rem" }} />
  else if (name === "Schlumberger")
    return <img src={SB} alt="SB" style={{ marginRight: "0.5rem" }} />
  else if (name === "Интеллектуальные системы")
    return (
      <img src={AiDriller} alt="AiDriller" style={{ marginRight: "0.5rem" }} />
    )
  else if (name === "Weatherford")
    return (
      <img
        src={Weatherford}
        alt="Weatherford"
        style={{ marginRight: "0.5rem" }}
      />
    )
  else if (name === "ССК" || name === "Сибирская сервисная компания")
    return <img src={SSK} alt="SSK" style={{ marginRight: "0.5rem" }} />
  else if (name === "ПНМР")
    return <img src={PNMR} alt="PNMR" style={{ marginRight: "0.5rem" }} />
  return <div className="one-big-initial-box">{name.slice(0, 1)}</div>
}
