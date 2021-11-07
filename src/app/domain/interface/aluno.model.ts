import {Usuario} from "./usuario.model";

export interface Aluno extends  Usuario{

  altura: string;
  peso: string;
  circAbdominal: string;
}
