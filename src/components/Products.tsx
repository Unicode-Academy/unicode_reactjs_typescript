import { useContext } from "react";
import { AppContext } from "../App";

export default function Products() {
  const { title, setTitle } = useContext(AppContext);
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        repellendus, consequuntur, ullam minima vero eos mollitia fugit in rem
        doloribus voluptas debitis repudiandae quasi nam tempora nisi a?
        Maiores, quia!
      </p>
      <button onClick={() => setTitle("New Title")}>Change Title</button>
    </div>
  );
}
