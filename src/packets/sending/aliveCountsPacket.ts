import { SendingPacket } from "../sendingPacket";
import { MsgType, type SurvivBitStream } from "../../utils";
import { type Player } from "../../game/objects/player";

export class AliveCountsPacket extends SendingPacket {

    constructor(p: Player) {
        super(p);
        this.allocBytes = 3;
    }

    writeData(stream: SurvivBitStream): void {
        stream.writeUint8(MsgType.AliveCounts);
        stream.writeUint8(1); // Team count (2 for 50v50, 1 for everything else)
        stream.writeUint8(this.p.game!.aliveCount);
    }

}
