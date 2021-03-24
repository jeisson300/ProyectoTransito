import { AgenteTransito } from "./agenteTransito";

export class Via
{

    constructor(

        public identificador:number,
        public tipo :string,
        public calleCarrera: string,
        public nivelCongestion: number,
        public numero: number,
        public listaAgente: AgenteTransito[]


    )
    {}
}