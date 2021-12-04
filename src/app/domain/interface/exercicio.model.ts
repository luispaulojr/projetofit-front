import { Foto } from "./foto.model";

export interface Exercicio {
  id: number;
  nome: string;
  musculo: string;
  repeticoes: string;
  fotos: string[];
}
