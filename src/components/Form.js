import { useState } from "react";
import { FormGroup,Label,Input,Button,Form, FormText } from "reactstrap";
import "./Form.css"
const initialList={
    name:"",
    surname:"",
    email:"",
    age:""
}
const Form1=( props)=>{
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

    return  <Form className="form" onSubmit={handlerSumbit}>
        <h1 className="title">Üyeleri Oluştur</h1>
<FormGroup >
    <Label
      for="exampleEmail"
      hidden
    >
     Name
    </Label>
    <Input
      name="name" placeholder="Name" value={newMember.name} onChange={handlerChange} type="text"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Surname
    </Label>
    <Input
     name="surname" placeholder="Surname" value={newMember.surname} onChange={handlerChange} type="text"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     Email
    </Label>
    <Input
    name="email" placeholder="Email" value={newMember.email} onChange={handlerChange} type="email"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
     Age
    </Label>
    <Input
   name="age" placeholder="Age" value={newMember.age} onChange={handlerChange} type="number"
    />
  </FormGroup>
  {' '}

  <Button type="submit">
  Kaydet
  </Button>
        </Form>
}
export default Form1;