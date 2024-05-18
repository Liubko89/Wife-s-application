import Joi from "joi";

export const contactsSchema = Joi.object({
  name: Joi.string().required(),
  workingHours: Joi.string().required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  income: Joi.string()
    .regex(/^\d+(?:\.\d+)?$/)
    .required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string(),
  workingHours: Joi.string(),
  date: Joi.string(),
  time: Joi.string(),
  income: Joi.string().regex(/^\d+(?:\.\d+)?$/),
});
