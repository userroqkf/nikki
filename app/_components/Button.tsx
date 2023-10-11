import styles from '@/_styles/Button.module.css';
type Props =  {
  label: string;
  size? : 'small' | 'medium' | 'large';
  style: 'solid' | 'empty';
  handleFormSubmit?
}

export default function Button({ label, size, style, handleFormSubmit } : Props) {
  const className: string = `${styles.button} ${size === undefined ? "" : styles[size]} ${styles[style]}`  
  return (
    <button className={className} onClick={handleFormSubmit}> 
      {label} 
    </button> 
  );

};
