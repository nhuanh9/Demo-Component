import {useEffect, useState} from "react";

export default function FComponent() {
    //hook: dùng được state và life cycle trong Function component
    let [list, setList] = useState([
        {
            name: 'Anh',
            age: 23
        },
        {
            name: 'Bạn',
            age: 22
        }]);
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    return (
        <>
            {list.map((item, ind) => (
                <h2 key={ind}>{item.name}, {item.age}</h2>
            ))}
            <input type="text" value={name} onChange={(e)=> {
                setName(e.target.value)
            }}/>
            <input type="text" value={age} onChange={(e)=> {
                setAge(e.target.value)
            }}/>
            <button onClick={()=> {
                setList([...list, {
                    name: name,
                    age: age
                }])
                setName('');
                setAge('');
            }}>Add</button>
        </>
    )
}
