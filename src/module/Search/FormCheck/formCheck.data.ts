import Checkbox from "../../../ui/Checkbox/Checkbox";

interface IFormCheck {
  id: number;
  text: string;
  checkbox: any;
}

export const arr: IFormCheck[] = [
  {
    id: 1,
    text: "Признак максимальной полноты",
    checkbox: Checkbox,
  },
  {
    id: 2,
    text: "Упоминания в бизнес-контексте",
    checkbox: Checkbox,
  },
  {
    id: 3,
    text: "Главная роль в публикации",
    checkbox: Checkbox,
  },
  {
    id: 4,
    text: "Публикации только с риск-факторами",
    checkbox: Checkbox,
  },
  {
    id: 5,
    text: "Включать технические новости рынков",
    checkbox: Checkbox,
  },
  {
    id: 6,
    text: "Включать анонсы и календари",
    checkbox: Checkbox,
  },
  {
    id: 7,
    text: "Включать сводки новостей",
    checkbox: Checkbox,
  },
];
