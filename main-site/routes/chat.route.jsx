import MainSec from "../components/Chat/main.component";
import { BotData } from "../context/data.context";

export default function ChatRoute() {
  return (
    <div>
      <BotData>
        <MainSec />
      </BotData>
    </div>
  );
}
