export default function InputBox({ heading,label,onChange }){
    return <div>
        <div className = "text-left text-md py-1 pt-2 text-bold">
            {heading}
        </div>
        <div>
            <input onChange = {onChange} className = "w-full px-2 py-1 pb-2 border rounded border-slate-200" placeholder = {label}></input>
        </div>
    </div>
}