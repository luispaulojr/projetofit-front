import { Ingrediente } from "./ingrediente.model";

export interface Receita {
  nome: string;
  horario: string;
  refeicao: string;
  objetivo: string;
  ingredientes: Ingrediente[];
  preparo: string;
  nutricionistaId: number;
}
