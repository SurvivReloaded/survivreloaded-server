import { type Vector2 } from "arcade-physics/lib/math/Vector2";
import { type Body } from "arcade-physics/lib/physics/arcade/Body";

import { type Game } from "./game";
import { type ObjectKind, type SurvivBitStream, TypeToId } from "../utils";
import { type StaticBody } from "arcade-physics/lib/physics/arcade/StaticBody";

export abstract class GameObject {
    kind: ObjectKind;
    id: number;
    typeString?: string;
    typeId: number;
    _position: Vector2;
    layer: number;
    orientation?: number;
    scale = 1;
    dead = false;
    showOnMap = false;

    interactable = false;
    interactionRad: number;
    damageable = false;

    game?: Game;

    body: Body | StaticBody | null;

    protected constructor(id: number,
                          typeString: string,
                          position: Vector2,
                          layer: number,
                          orientation?: number,
                          game?: Game) {
        this.id = id;
        this.typeString = typeString;
        if(this.typeString) this.typeId = TypeToId[typeString];
        this._position = position;
        this.layer = layer;
        this.orientation = orientation;
        this.game = game;
    }

    get position(): Vector2 {
        return this._position;
    }

    abstract serializePartial(stream: SurvivBitStream): void;
    abstract serializeFull(stream: SurvivBitStream): void;

}
