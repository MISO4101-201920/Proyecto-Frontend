export class AnswerQuestion {

  constructor(
    public respuestmultiple: number,
    public estudiante: number,
    public intento: number,
    public grupo: number
  ) { }

}

export class AnswerQuestionVoF {

  constructor(
    public intento: number,
    public esVerdadero: boolean,
    public estudiante: number,
    public grupo: number,
    public preguntaVoF: number
  ) { }

}

export class AnswerOpenQuestion {

  constructor(
    public intento: number,
    public respuesta: string,
    public retroalimentacion: string,
    public estudiante: number,
    public grupo: number,
    public preguntaAbierta: number
  ) { }

}
