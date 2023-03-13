import { type Vector2 } from "arcade-physics/lib/math/Vector2";

import { ObjectKind, removeFrom, type SurvivBitStream } from "../../utils";
import { type Game } from "../game";
import { GameObject } from "../gameObject";
import { type Player } from "./player";
import { PickupMsgType, PickupPacket } from "../../packets/sending/pickupPacket";

export class Loot extends GameObject {

    count: number;
    interactable = true;
    interactionRad = -0.01;

    constructor(id: number,
                typeString: string,
                position: Vector2,
                layer: number,
                game: Game,
                count: number) {
        super(id, typeString, position, layer, undefined, game);
        this.kind = ObjectKind.Loot;
        this.count = count;
        this.body = this.game!.physics.add.body(position.x, position.y);
        this.body.setCircle(1);
    }

    get position(): Vector2 {
        return this.body!.position;
    }

    interact(p: Player): void {
        removeFrom(this.game!.objects, this);
        this.game!.deletedObjects.push(this);
        this.body!.destroy();
        this.interactable = false;
        p.sendPacket(new PickupPacket(p, this.typeString!, this.count, PickupMsgType.Success));
    }

    serializePartial(stream: SurvivBitStream): void {
        stream.writeVec(this.position, 0, 0, 1024, 1024, 16);
    }

    serializeFull(stream: SurvivBitStream): void {
        stream.writeGameType(this.typeId);
        stream.writeUint8(this.count);
        stream.writeBits(this.layer, 2);
        stream.writeBoolean(false); // Is old
        stream.writeBoolean(false); // Is preloaded gun
        stream.writeBoolean(false); // Has owner
    }

}
