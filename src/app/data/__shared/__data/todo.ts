import { ITodoModel } from "../../todo/domain/models/todo.model";
import { v4 as uuid } from 'uuid';
export const INITIAL_DATA: ITodoModel[] = [
    {
        id: uuid(),
        title: "MESA MÁRMOL TRAVERTINO RECTANGULAR",
        description: "Mesa de mármol travertino, con forma rectangular con un solo pie de apoyo en el centro. Su forma y color pueden variar de una pieza a otra, haciendo a cada una de ellas única."
    },
    {
        id: uuid(),
        title: "MESA CENTRO IRREGULAR ACACIA",
        description: "Mesa de madera de acacia de superficie lisa con forma irregular con patas en forma de T. Requiere montaje. Incluye instrucciones de montaje, fáciles de seguir.a"
    },
    {
        id: uuid(),
        title: "ESPEJO PARED METAL RECTANGULAR",
        description: "Espejo de pared, rectangular, con marco ancho de aluminio en tres tamaños diferentes pensados para formar composiciones diferentes en la pared. Se pueden colgar en posición horizontal o vertical."
    },
]