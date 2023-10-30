import styles from '@/_styles/Button.module.css';
type Props =  {
  label: string;
  size? : 'small' | 'medium' | 'large';
  style: 'solid' | 'empty';
  handleFormSubmit?: 
  | (() => void)
  | (() => Promise<void>)
  | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) 
  | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void>)
  | ((e: Event) => Promise<void>)
}

export default function Button({ label, size, style, handleFormSubmit } : Props) {
  const className: string = `${styles.button} ${size === undefined ? "" : styles[size]} ${styles[style]}`  
  return (
    <button className={className} onClick={handleFormSubmit as React.MouseEventHandler<HTMLButtonElement>}>
      {label} 
    </button> 
  );

};
