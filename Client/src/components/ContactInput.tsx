interface InputProps {
  placeholder: string;
  className? : string
  size?: 'big' | 'small'
}
export default function ContactInput({ size, placeholder, className }: InputProps) {
  return size === 'big' ?  <textarea rows={5} className={`${className} bg-slate-200 p-3 rounded-md outline-none shadow-lg`} placeholder={placeholder} /> : 
  <input className={`${className || ""} bg-slate-200 p-3 rounded-md shadow-lg outline-none`} type="text" placeholder={placeholder} />;
}
