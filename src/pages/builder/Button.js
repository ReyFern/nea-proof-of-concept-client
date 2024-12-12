
export default function Button(props) {
    let [value, setValue] = useState(0);
    return (<button onClick={(e)=>{
        setValue(value + 1);
    }}>
        {value}
    </button>
    )
}