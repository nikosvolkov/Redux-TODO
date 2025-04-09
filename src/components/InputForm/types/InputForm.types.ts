import React from "react";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.SyntheticEvent<HTMLFormElement>;

interface InputFormProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
}

export type {InputEvent, FormEvent, InputFormProps}