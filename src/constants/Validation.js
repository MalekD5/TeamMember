import { object, string, array, date } from "yup";

const teamSchema = object({
  name: string().required(),
  description: string().max(250).optional(),
  members: array().default([]).required(),
  creation: date().default(() => new Date()),
});

export default teamSchema;
