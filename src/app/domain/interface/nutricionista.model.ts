import {Usuario} from "./usuario.model";
import {Endereco} from "./endereco.model";

export interface Nutricionista extends Usuario {
  crn: string;
  consultorio: Endereco;
}
