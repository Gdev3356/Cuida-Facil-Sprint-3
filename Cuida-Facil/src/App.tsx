import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  return(
    <div className="body">
      <Outlet/>
      <Rodape/>
    </div>
  );
}