import styles from '../styles/Button.module.css';
type Props =  {
  label: string;
  size? : 'small' | 'medium' | 'large';
}

export default function Button({ label, size } : Props) {
  console.log(size, "size print", styles)
  const className: string = `${styles.button} ${size === undefined ? "" : styles[size]}`  
  return (
    <button 
      className={className}
    > 
      {label} 
    </button> 
  );

};
