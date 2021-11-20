import { UserStatus } from "../enums/user_status.enum";

export abstract class ProfessorPerfilMock {
  static readonly PROFESSOR = {
    nome: "Luis Paulo",
    genero: "MASCULINO",
    login: "lpjunior",
    email: "luispaulojr@gmail.com",
    telefone: "(21) 96345-8712",
    tipo: "ALUNO",
    status: UserStatus.ATIVO,
    dataNascimento: "1987-04-29",
    cref: 123,
    academia: {
      razaoSocial: "Senac BodyBuild",
      cnpj: "123.456.789/0001",
      endereco: {
        logradouro: "Rua 1",
        bairro: "Centro",
        cidade: "Rio de Janeiro",
      },
    },
    exercicios: [
      {
        nome: "Exercicio 01",
        musculo: "Musculo A",
        repeticoes: "3x10",
        foto: {
          nome: "exercicio 01",
          url: "https://treinomestre.com.br/wp-content/uploads/2017/05/supino-declinado-capa.jpg",
        },
      },
      {
        nome: "Exercicio 02",
        musculo: "Musculo B",
        repeticoes: "4x20",
        foto: {
          nome: "exercicio 02",
          url: "https://treinomestre.com.br/wp-content/uploads/2017/05/supino-declinado-capa.jpg",
        },
      },
      {
        nome: "Exercicio 03",
        musculo: "Musculo C",
        repeticoes: "3x12",
        foto: {
          nome: "exercicio 03",
          url: "https://treinomestre.com.br/wp-content/uploads/2017/05/supino-declinado-capa.jpg",
        },
      },
    ],
  };
}
