import { z } from "zod";

const BaseFieldSchema = z.object({
  id: z.string().cuid2().default(""),
  label: z.string().default(""),
  name: z.string(),
  required: z.boolean().default(false),
});

const TextInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("text"),
  placeholder: z.string().default("Enter text..."),
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
  pattern: z.string().optional(),
  readOnly: z.boolean().default(false).optional(),
  defaultValue: z.string().optional(),
});

const NumberInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("number"),
  placeholder: z.string().default("Enter a number..."),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  defaultValue: z.number().optional(),
});

const EmailInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("email"),
  placeholder: z.string().default("Enter email..."),
  maxLength: z.number().optional(),
  pattern: z.string().optional(),
  defaultValue: z.string().optional(),
});

const PasswordInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("password"),
  placeholder: z.string().default("Enter password..."),
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
});

const CheckboxInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("checkbox"),
  defaultChecked: z.boolean().default(false),
});

const RadioInputSchema = BaseFieldSchema.extend({
  componentType: z.literal("Input"),
  type: z.literal("radio"),
  options: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  defaultValue: z.string().optional(),
});

const TextareaSchema = BaseFieldSchema.extend({
  componentType: z.literal("Textarea"),
  rows: z.number().default(4),
  placeholder: z.string().default("Enter text..."),
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
  readOnly: z.boolean().default(false).optional(),
  defaultValue: z.string().optional(),
});

const SelectSchema = BaseFieldSchema.extend({
  componentType: z.literal("Select"),
  options: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  multiple: z.boolean().default(false).optional(),
  defaultValue: z.union([z.string(), z.array(z.string())]).optional(),
});

// Union of all field types
const FormFieldSchema = z.discriminatedUnion("componentType", [
  TextInputSchema,
  NumberInputSchema,
  EmailInputSchema,
  PasswordInputSchema,
  CheckboxInputSchema,
  RadioInputSchema,
  TextareaSchema,
  SelectSchema,
]);

// Main form schema
export const FormSchema = z.object({
  id: z.string().cuid2().default(""),
  formName: z.string().min(1, "Form name is required"),
  version: z.number().int().positive().default(1),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  formFields: z.array(FormFieldSchema),
  description: z.string().optional(),
  published: z.boolean().default(false),
});

// Type definitions
export type FormField = z.infer<typeof FormFieldSchema>;
export type Form = z.infer<typeof FormSchema>;
