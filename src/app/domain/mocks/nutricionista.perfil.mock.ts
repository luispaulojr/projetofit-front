import { UserStatus } from "../enums/user_status.enum";

export abstract class NutricionistaPerfilMock {
  static readonly DIETA = {
    receitas: [
      {
        nome: "Suco verde",
        horario: "07:00 am",
        refeicao: "Café da manhã",
        objetivo:
          "O suco detox ajuda o organismo a eliminar as toxinas e a emagrecer. Outros benefícios do suco detox são a melhora do aspecto da pele e controle do apetite, pois as fibras presentes nos vegetais e na frutas promovem um efeito saciante ao organismo, reduzindo o consumo de alimentos em excesso",
        ingredientes: [
          {
            nome: "couve",
            quantidade: 1,
            tipo: "FOLHA",
            complemento: "bem verde",
          },
          {
            nome: "limão",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "Lavei-o bem",
          },
          {
            nome: "maçã",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "bem vermelha",
          },
          {
            nome: "gengibre",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "hortelã",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "linhaça",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "linhaça dourada",
          },
          {
            nome: "mel",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "colher de sopa",
          },
          {
            nome: "água",
            quantidade: 250,
            tipo: "MILILITRO",
            complemento: "fria",
          },
        ],
        preparo:
          "Junte todos os ingredientes(com cascas) no liquidificador, bata-os bem e sirva-se em seguida. Caso queira, pode coar. Tomar de preferencia pela manhã de jejum",
        nutricionistaId: 3,
      },
      {
        nome: "Suco verde",
        horario: "10:00 am",
        refeicao: "Colação 01",
        objetivo:
          "O suco detox ajuda o organismo a eliminar as toxinas e a emagrecer. Outros benefícios do suco detox são a melhora do aspecto da pele e controle do apetite, pois as fibras presentes nos vegetais e na frutas promovem um efeito saciante ao organismo, reduzindo o consumo de alimentos em excesso",
        ingredientes: [
          {
            nome: "couve",
            quantidade: 1,
            tipo: "FOLHA",
            complemento: "bem verde",
          },
          {
            nome: "limão",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "Lavei-o bem",
          },
          {
            nome: "maçã",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "bem vermelha",
          },
          {
            nome: "gengibre",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "hortelã",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "linhaça",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "linhaça dourada",
          },
          {
            nome: "mel",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "colher de sopa",
          },
          {
            nome: "água",
            quantidade: 250,
            tipo: "MILILITRO",
            complemento: "fria",
          },
        ],
        preparo:
          "Junte todos os ingredientes(com cascas) no liquidificador, bata-os bem e sirva-se em seguida. Caso queira, pode coar. Tomar de preferencia pela manhã de jejum",
        nutricionistaId: 3,
      },
      {
        nome: "Suco verde",
        horario: "12:00 pm",
        refeicao: "Almoço",
        objetivo:
          "O suco detox ajuda o organismo a eliminar as toxinas e a emagrecer. Outros benefícios do suco detox são a melhora do aspecto da pele e controle do apetite, pois as fibras presentes nos vegetais e na frutas promovem um efeito saciante ao organismo, reduzindo o consumo de alimentos em excesso",
        ingredientes: [
          {
            nome: "couve",
            quantidade: 1,
            tipo: "FOLHA",
            complemento: "bem verde",
          },
          {
            nome: "limão",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "Lavei-o bem",
          },
          {
            nome: "maçã",
            quantidade: 1,
            tipo: "UNIDADE",
            complemento: "bem vermelha",
          },
          {
            nome: "gengibre",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "hortelã",
            quantidade: 0,
            tipo: "UNIDADE",
            complemento: "quantidade a gosto",
          },
          {
            nome: "linhaça",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "linhaça dourada",
          },
          {
            nome: "mel",
            quantidade: 1,
            tipo: "COLHER",
            complemento: "colher de sopa",
          },
          {
            nome: "água",
            quantidade: 250,
            tipo: "MILILITRO",
            complemento: "fria",
          },
        ],
        preparo:
          "Junte todos os ingredientes(com cascas) no liquidificador, bata-os bem e sirva-se em seguida. Caso queira, pode coar. Tomar de preferencia pela manhã de jejum",
        nutricionistaId: 3,
      },
    ],
  };

  static readonly NUTRICIONISTA = {
    nome: "Luis Paulo",
    genero: "MASCULINO",
    login: "lpjunior",
    email: "luispaulojr@gmail.com",
    telefone: "(21) 96345-8712",
    tipo: "ALUNO",
    status: UserStatus.ATIVO,
    dataNascimento: "1987-04-29",
    crn: 12345,
    logradouro: "rua 1",
    bairro: "centro",
    cidade: "Rio de Janeiro",
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
