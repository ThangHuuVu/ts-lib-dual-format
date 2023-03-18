import { getStuff } from "./lib/getStuff.js"

export const myFunction = () => {
  console.log({ stuff: getStuff() })
}
