import { urlEvent } from "../const/const";

export default function getTempApi() {
  return fetch(urlEvent, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      eventName: "timeOfday"
    })
  });
}
