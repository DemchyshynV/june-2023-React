import {useEffect, useRef, useState} from "react";

const App = () => {
    const [user, setUser] = useState({})
    const [count, setCount] = useState(0)
    const name = useRef();
    const age = useRef();

    const save = (e) => {
        // e.preventDefault()
        // console.log(name.current.value);
        // console.log(age.current.value);
        // e.target.reset()
        // console.log(e.target.name.value);
        // console.log(e.target.age.value);

        // name.target.value= ''
        // age.target.value= ''
    }
    // console.log(user);
    // const handler =(e)=>{
    //     e.preventDefault()
    //     setUser(prevState => ({...prevState, [e.target.name]:e.target.value}))
    // }


    useEffect(() => {
        const user = {
            name:'max',
            age:15
        }

        const nameKey = 'name'
        const newUser = {...user, [nameKey]:'Kostia'}
    }, [])

    return (
        // <form onSubmit={save}>
        //     <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
        //     <input type="text" placeholder={'age'} name={'age'} onChange={handler}/>
        //     <button>save</button>
        // </form>
        <div>
            <div>count: {count}</div>
            <button onClick={()=>setCount(prev=>prev+1)}>inc</button>
        </div>
    );
};

export {App};