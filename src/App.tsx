import "./App.css";
import { Text } from "./shared";

function App() {
  return (
    <>
      <Text text="Hello" family="sora" />
      <Text text="Mono" />
      <Text text="Mono" family="sora" variant="secondary" />
    </>
  );
}

export default App;
