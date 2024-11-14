import { FC } from "react";
import { ReactComponent as NewArrivalTag } from "@/assets/svg/new-arrival.svg";
import Assassin from "@/assets/images/NewArrival/assassin.png";
import BassketBallGirl from "@/assets/images/NewArrival/bassketball-girl.png";
import MafiaEngland from "@/assets/images/NewArrival/mafia-england.png";
import NeonGuy from "@/assets/images/NewArrival/neon-guy.png";
import "./style.less";

const newArrivals = [Assassin, BassketBallGirl, MafiaEngland, NeonGuy];

const NewArrival: FC = () => {
  return (
    <div className="new-arrival-wrapper">
      <div className="new-arrival-header">
        <NewArrivalTag />
      </div>
      <div className="new-arrival-body">
        {newArrivals.map((item) => (
          <img key={item} src={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
