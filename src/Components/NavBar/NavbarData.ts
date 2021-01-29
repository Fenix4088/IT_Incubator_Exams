import { v1 } from "uuid";

export const menusId = {
  miniProject: v1(),
  examsTasks: v1(),
};

export type NavbarListDataT = {
  [key: string]: NavbarListDataItemT;
};

type NavbarListDataItemT = {
  title: string;
  itemNames: Array<string>;
};

export const navbarListData: NavbarListDataT = {
  [menusId.miniProject]: {
    title: "Mini projects",
    itemNames: ["counter", "todolist"],
  },
  [menusId.examsTasks]: {
    title: "Exams projects",
    itemNames: ["monday", "tuesday", "wednesday", "thursday", "friday"],
  },
};
