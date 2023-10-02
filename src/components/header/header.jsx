import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../context/action/action";

export default function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <nav className="header">
      <span className="input-search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => dispatch({ type: search, payload: e.target.value })}
          value={state.search}
        />
        <span>
          <SearchIcon />
        </span>
      </span>
    </nav>
  );
}
