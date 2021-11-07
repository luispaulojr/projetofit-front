import {Academia} from "./academia.model";
import {Usuario} from "./usuario.model";

export interface Professor extends Usuario {
  cref: string;
  academiaFiliada: Academia;
}
