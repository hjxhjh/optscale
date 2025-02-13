import { createRoot } from "react-dom/client";
import TestProvider from "tests/TestProvider";
import MainMenu from "./MainMenu";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <TestProvider>
      <MainMenu menu={[]} />
    </TestProvider>
  );
  root.unmount();
});
