import { bodyFromCollisionData, ObjectKind, type SurvivBitStream } from "../../utils";
import { GameObject } from "../gameObject";
import { type Vector2 } from "arcade-physics/lib/math/Vector2";
import { type Game } from "../game";

export class Building extends GameObject {

    showOnMap: boolean;

    occupied = false;
    ceilingDamaged = false;
    hasPuzzle = false;

    constructor(id: number,
                typeString: string,
                position: Vector2,
                layer: number,
                orientation: number,
                game: Game,
                showOnMap: boolean,
                data) {
        super(id, typeString, position, layer, orientation, game);
        this.kind = ObjectKind.Building;

        this.showOnMap = showOnMap;
        if(data.mapObstacleBounds) {
            this.body = bodyFromCollisionData(this.game!, data.mapObstacleBounds[0], this.position);
        }
    }

    serializePartial(stream: SurvivBitStream): void {
        stream.writeBoolean(this.dead); // Ceiling destroyed
        stream.writeBoolean(this.occupied);
        stream.writeBoolean(this.ceilingDamaged);
        stream.writeBoolean(this.hasPuzzle);
        stream.writeBits(0, 4); // Padding
    }

    serializeFull(stream: SurvivBitStream): void {
        stream.writeVec(this.position, 0, 0, 1024, 1024, 16);
        stream.writeMapType(this.typeId);
        stream.writeBits(this.orientation!, 2);
        stream.writeBits(this.layer, 2);
    }

}
