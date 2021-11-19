import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function getUserMsisdn() {
  if (cookies.get("cinemaApp")) {
    let userMsisdn = cookies.get("cinemaApp");
    return userMsisdn;
  }
  return null;
}
