import { Via } from "./via";

export class AgenteTransito
{

    constructor(

        public codigo:number,
        public nombre: string,
        public yearExperience: number,
        public codigoTransito: string,
        public via: Via
    )
    {}
}