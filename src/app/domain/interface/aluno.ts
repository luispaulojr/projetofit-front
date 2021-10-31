import {UserStatus} from "../enums/user_status.enum";
import {UserType} from "../enums/user_type.enum";
import {GeneroType} from "../enums/genero_type.enum";

export interface Aluno {
  nome: string;
  genero: GeneroType;
  login: string;
  senha: string;
  email: string;
  telefone: string;
  tipo: UserType;
  status: UserStatus;
  dataNascimento: string;
  altura: string;
  peso: string;
  circAbdominal: string;
}

