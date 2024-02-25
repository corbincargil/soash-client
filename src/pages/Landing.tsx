import { Link } from "react-router-dom";
import {
  primaryClassNames,
  secondaryClassNames,
} from "../Components/Forms/helpers/Button";

export function Landing() {
  return (
    <div className="w-full m-0 p-0 flex">
      <div className="w-0 sm:w-7/12 h-full bg-gradient-to-b from-blue-950 to-blue-700 shadow-lg"></div>
      <div className="w-full bg-slate-200 flex items-center">
        <div className="min-w-80 w-8/12 mx-auto p-4 flex flex-col justify-center items-center">
          <h1 className=" min-w-min p-4 max-w-sm text-center text-7xl font-extrabold text-white bg-gradient-to-b from-blue-950 to-blue-700 rounded-lg shadow-lg">
            Unsoash
          </h1>

          <div className="py-4 flex justify-around">
            <Link to="/login" className={primaryClassNames}>
              Log in
            </Link>
            <Link to="/login/register" className={secondaryClassNames}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
