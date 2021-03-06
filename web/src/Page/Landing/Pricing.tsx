import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div id="price" className="flex flex-col w-screen">
      <div className="bg-blue"></div>
      <div className="lg:w-1/2 bg-blue"></div>
    </div>
  );
});
