import { GeneroType } from "../enums/genero_type.enum";
import { UserType } from "../enums/user_type.enum";
import { UserStatus } from "../enums/user_status.enum";

export interface Usuario {
  nome: string;
  genero: GeneroType;
  login: string;
  senha: string;
  email: string;
  telefone: string;
  tipo: UserType;
  status: UserStatus;
  dataNascimento: string;
}
