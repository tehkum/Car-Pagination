import "./card.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

export default function Card({ props }) {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/200/300"
        alt="car"
        className="car-card-img"
      />
      <div className="card-section-1">
        <div className="card-heading">
          <h3>{props?.name}</h3>
          <p>{props?.year}</p>
        </div>
        <div className="card-item">
          <p>
            <span>
              <PersonOutlineOutlinedIcon />
            </span>{" "}
            {props?.seats} Seeter
          </p>
          <p>
            <span>
              <EvStationOutlinedIcon />
            </span>{" "}
            {props?.fuel_type}
          </p>
        </div>
        <div className="card-item">
          <p>
            <span>
              <SpeedOutlinedIcon />
            </span>{" "}
            {props?.mileage}
          </p>
          <p>
            <span>
              <img
                className="steering-icon"
                src="https://img.icons8.com/android/96/228BE6/steering-wheel.png"
                alt="steering-wheel"
              />
            </span>
            {props?.transmission}
          </p>
        </div>
      </div>
      <hr />
      <div className="card-foot">
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h2>${props?.rent_cost}</h2> <p>/month</p>
        </span>
        <span>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/material-outlined/96/228BE6/like--v1.png"
            alt="like--v1"
            className="btn-hrt"
          />

          <button>Rent now</button>
        </span>
      </div>
    </div>
  );
}
