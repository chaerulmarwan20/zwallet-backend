const Joi = require("joi");

module.exports = {
  validationUsers: (users) => {
    const schema = Joi.object({
      username: Joi.string().required().messages({
        "string.base": `Username should be a type of text`,
        "string.empty": `Username cannot be an empty field`,
        "any.required": `Username is a required field`,
      }),
      email: Joi.string().email().required().messages({
        "string.base": `Email should be a type of text`,
        "string.empty": `Email cannot be an empty field`,
        "any.required": `Email is a required field`,
      }),
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationUsersUpdate: (users) => {
    const schema = Joi.object({
      username: Joi.string().required().messages({
        "string.base": `Username should be a type of text`,
        "string.empty": `Username cannot be an empty field`,
        "any.required": `Username is a required field`,
      }),
      firstName: Joi.string().required().messages({
        "string.base": `First name should be a type of text`,
        "string.empty": `First name cannot be an empty field`,
        "any.required": `First name is a required field`,
      }),
      lastName: Joi.string().required().messages({
        "string.base": `Last name should be a type of text`,
        "string.empty": `Last name cannot be an empty field`,
        "any.required": `Last name is a required field`,
      }),
      phoneNumber: Joi.number().required().messages({
        "number.base": `Phone number should be a type of number`,
        "number.empty": `Phone number cannot be an empty field`,
        "any.required": `Phone number is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationPin: (users) => {
    const schema = Joi.object({
      pin: Joi.number().required().messages({
        "number.base": `Pin should be a type of number`,
        "number.empty": `Pin cannot be an empty field`,
        "any.required": `Pin is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationLogin: (users) => {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        "string.base": `Email should be a type of text`,
        "string.empty": `Email cannot be an empty field`,
        "any.required": `Email is a required field`,
      }),
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationPassword: (users) => {
    const schema = Joi.object({
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict()
        .messages({
          "string.base": `Confirm password should be a type of text`,
          "string.empty": `Confirm password cannot be an empty field`,
          "any.required": `Confirm password is a required field`,
        }),
    });
    return schema.validate(users);
  },
  validationChangePassword: (users) => {
    const schema = Joi.object({
      currentPassword: Joi.string().min(8).required().strict().messages({
        "string.base": `Current password should be a type of text`,
        "string.empty": `Current password cannot be an empty field`,
        "string.min": `Current password should have a minimum length of {#limit}`,
        "any.required": `Current password is a required field`,
      }),
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict()
        .messages({
          "string.base": `Confirm password should be a type of text`,
          "string.empty": `Confirm password cannot be an empty field`,
          "any.required": `Confirm password is a required field`,
        }),
    });
    return schema.validate(users);
  },
  validationPhoneNumber: (users) => {
    const schema = Joi.object({
      phoneNumber: Joi.number().required().messages({
        "number.base": `Phone number should be a type of number`,
        "number.empty": `Phone number cannot be an empty field`,
        "any.required": `Phone number is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationTransactions: (transactions) => {
    const schema = Joi.object({
      idUser: Joi.number().required().messages({
        "number.base": `Id sender should be a type of number`,
        "number.empty": `Id sender cannot be an empty field`,
        "any.required": `Id sender is a required field`,
      }),
      idReceiver: Joi.number().required().messages({
        "number.base": `Id receiver should be a type of number`,
        "number.empty": `Id receiver cannot be an empty field`,
        "any.required": `Id receiver is a required field`,
      }),
      amount: Joi.number().required().messages({
        "number.base": `Amount should be a type of number`,
        "number.empty": `Amount cannot be an empty field`,
        "any.required": `Amount is a required field`,
      }),
      notes: Joi.string().required().messages({
        "string.base": `Notes should be a type of text`,
        "string.empty": `Notes cannot be an empty field`,
        "any.required": `Notes is a required field`,
      }),
    });
    return schema.validate(transactions);
  },
  validationDetails: (details) => {
    const schema = Joi.object({
      idUser: Joi.number().required().messages({
        "number.base": `Id sender should be a type of number`,
        "number.empty": `Id sender cannot be an empty field`,
        "any.required": `Id sender is a required field`,
      }),
      idReceiver: Joi.number().required().messages({
        "number.base": `Id receiver should be a type of number`,
        "number.empty": `Id receiver cannot be an empty field`,
        "any.required": `Id receiver is a required field`,
      }),
      amount: Joi.number().required().messages({
        "number.base": `Amount should be a type of number`,
        "number.empty": `Amount cannot be an empty field`,
        "any.required": `Amount is a required field`,
      }),
      balanceLeft: Joi.number().required().messages({
        "number.base": `Balance left should be a type of number`,
        "number.empty": `Balance left cannot be an empty field`,
        "any.required": `Balance left is a required field`,
      }),
      notes: Joi.string().required().messages({
        "string.base": `Notes should be a type of text`,
        "string.empty": `Notes cannot be an empty field`,
        "any.required": `Notes is a required field`,
      }),
    });
    return schema.validate(details);
  },
  validationTopUp: (topUp) => {
    const schema = Joi.object({
      amount: Joi.number().required().messages({
        "number.base": `Amount should be a type of number`,
        "number.empty": `Amount cannot be an empty field`,
        "any.required": `Amount is a required field`,
      }),
      idPayment: Joi.number().required().messages({
        "number.base": `Id payment should be a type of number`,
        "number.empty": `Id payment cannot be an empty field`,
        "any.required": `Id payment is a required field`,
      }),
    });
    return schema.validate(topUp);
  },
  validationForgot: (users) => {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        "string.base": `Email should be a type of text`,
        "string.empty": `Email cannot be an empty field`,
        "any.required": `Email is a required field`,
      }),
    });
    return schema.validate(users);
  },
};
