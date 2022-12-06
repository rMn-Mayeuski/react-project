import { Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';

export interface IInputData {
	email: string;
	password: string;
	name: string;
	password_confirm: string;
	password_new: string;
}

type InputProps = {
	keyData: Path<IInputData>;
	register: UseFormRegister<IInputData>;
	inputName?: string;
	name?: string;
	inputType?: string;
	placeholder?: any;
	required?: boolean;
	id?: string;
	onInput?: any;
	value?: string;
	disabled?: boolean;
	/*handleValue?: (e: React.ChangeEvent<HTMLInputElement>) => void; */
};

/*function showInput(event: any) {
	console.log(event.target.value)
}*/
//ф-ция для изменения data в настройках

const InputField = ({ keyData, inputName,
	inputType,
	placeholder,
	register,
	required,
	disabled,

}: InputProps) => {
	return (
		<div className={styles.inputItem}>
			<label htmlFor={inputName} className={styles.label}> {inputName} </label>
			<input className={styles.input}
				disabled={disabled}
				type={inputType}
				placeholder={placeholder}
				{...register(keyData, { required })}
			/>
		</div>
	);
};

export default InputField;
