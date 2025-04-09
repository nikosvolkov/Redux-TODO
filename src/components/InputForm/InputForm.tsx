import styles from './InputForm.module.css';
import {InputEvent, FormEvent, InputFormProps} from './types/InputForm.types'

const InputForm = ({ text, setText, handleAddTodo }: InputFormProps) => {
  return (
    <form action="" onSubmit={(e: FormEvent) => e.preventDefault()}>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Текст задачи"
        value={text}
        onChange={(e: InputEvent) => setText(e.target.value)}
      />

      <button className={styles.formButton} onClick={handleAddTodo}>
        Создать
      </button>
    </form>
  );
};

export default InputForm;
