import { InputHTMLAttributes } from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange: (value: any) =>void;
    label: string;
    columnClasses?: string;
    id:string;
    
}

export const Input: React.FC <inputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    ...inputProps
}: inputProps) => {
    return(
        <div className={`field column ${columnClasses}`}>
            <label htmlFor="inputSKU" className="label">{label}: *</label>
            <div className="control">
                <input className="input" 
                        id={id} {...inputProps}
                        onChange={event => onChange(event.target.value)}/>
            </div>
        </div>
    )
}