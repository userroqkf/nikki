import styles from '@/styles/Button.module.css';
type Props =  {
  label: string;
  size? : 'small' | 'medium' | 'large';
  style: 'solid' | 'empty';
}

export default function Button({ label, size, style } : Props) {
  const className: string = `${styles.button} ${size === undefined ? "" : styles[size]} ${styles[style]}`  
  return (
    <button className={className}> 
      {label} 
    </button> 
  );

};
