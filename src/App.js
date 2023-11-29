import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SahteVeri from './SahteVeri';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  const [list,setList]=useState(SahteVeri);
  console.log("son",list);

  const addMember=(member)=>{
      const newMember={...member,id:Math.floor(Math.random()*10000)}
      setList([...list,newMember])
  }
  

  return <div className='app-conatainer'>
        <MemberList list={list} />
        <Form addMember={addMember} />
  </div>
}

export default App;
