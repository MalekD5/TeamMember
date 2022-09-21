import { object, string, array, date, number } from "yup";

export const teamSchema = object({
  name: string().required(),
  description: string().max(250).optional(),
  members: array().default([]).required(),
  creation: date().default(() => new Date()),
});

export const employeeSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  role: string().required(),
  employeeSince: date().required(),
  experience: object({
    years: number().required().positive().integer(),
    frameworks: array().default([]).required(),
  }),
});
