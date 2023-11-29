import { useState } from "react";
const initialList={
    name:"",
    surname:"",
    email:"",
    age:""
}
const Form=( props)=>{
const {addMember}=props;
   const [newMember,setNewMember]=useState(initialList);

    const handlerChange=(e)=>{
      const key=e.target.name;

      setNewMember({...newMember,[key]:e.target.value})
    }
    
    const handlerSumbit=(e)=>{
        e.preventDefault();
        addMember(newMember);
        setNewMember(initialList);
    }

    return <form onSubmit={handlerSumbit}>
        <label>
            Name:
            <input name="name" value={newMember.name} onChange={handlerChange} type="text"></input>
        </label>
        <label>
            SurName:
            <input name="surname" value={newMember.surname} onChange={handlerChange} type="text"></input>
        </label>
        <label>
            E-mail:
            <input name="email" value={newMember.email} onChange={handlerChange} type="email"></input>
        </label>
        <label>
            Age:
            <input name="age" value={newMember.age} onChange={handlerChange} type="number"></input>
        </label>
        <button type="submit">Kaydet</button>
    </form>
}
export default Form;