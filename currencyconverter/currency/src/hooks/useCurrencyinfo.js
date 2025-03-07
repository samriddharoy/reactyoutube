import { useEffect , useState  } from "react";


function usecurrencyinfo(currency){
    const [data , setData] = useState({})
    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/9bddaefafd572cd6a1751be9/latest/${currency}')
        .then(res => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);

        
    }, [currency])
    console.log(data);
    return data
    
}

export default usecurrencyinfo;
