import "./App.css";
import { Button, Text } from "./shared";

function App() {
  return (
    <>
      <Text text="Hello" family="sora" />
      <Text text="Mono" />
      <Text text="Mono" family="sora" variant="secondary" />
      <div
        tabIndex={0}
        className="offset"
        style={{ width: "200px", height: "200px", backgroundColor: "red", borderRadius: "4px" }}
      >
        1
      </div>
      <Button variant="primary" text={"yes"} />
      <Button variant="secondary" text={"yes"} />
      <Button variant="danger" text={"yes"} />
      <Button variant="neutral" text={"yes"} />
    </>
  );
}

export default App;
