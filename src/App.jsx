import { Flex } from "@chakra-ui/react";
import "./App.css";
import YogaSandhya from "./modules/YogaSandhya";
import SadhguruCard from "./modules/SadhguruCard";

function App() {
  return (
    <Flex direction="column" height="100%" width="100%">
      <YogaSandhya />
      {/* <SadhguruCard /> */}
    </Flex>
  );
}

export default App;
