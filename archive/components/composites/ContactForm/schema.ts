import Joi from 'joi';

export const ContactFormSchema = Joi.object({
    'first-name': Joi.string().min(2).required().messages({
        'any.required': 'First Name is required',
        'string.empty': 'First Name is required',
        'string.min': 'Your first name should be at least 2 characters long',
    }),
    'last-name': Joi.string().min(2).required().messages({
        'any.required': 'Last Name is required',
        'string.empty': 'Last Name is required',
        'string.min': 'You last name should be at least 2 characters long',
    }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'any.required': 'Email is required',
            'string.empty': 'Email is required',
            'string.email': 'You must enter a valid email address',
        }),
    message: Joi.string().empty('').min(10).messages({
        'string.min': 'Your message should be at least 10 characters long',
    }),
});
