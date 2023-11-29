import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SahteVeri from './SahteVeri';
import MemberList from './components/MemberList';
import Form from './components/Form';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [list,setList]=useState(SahteVeri);
  console.log("son",list);

  const addMember=(member)=>{
      const newMember={...member,id:Math.floor(Math.random()*10000)}
      setList([...list,newMember])
  }
  

  return <div className='app-conatainer'>
     
    
    <nav className='navBar'>
       <Link className="linked" to="/" >
     Ana sayfa
    </Link>
    <Link className="linked" to="/create" >
    Üye Oluştur
    </Link>
    <Link className="linked" to="/members" >
    Üyeleri Gör
    </Link>
    </nav>
     
    <Switch>
      
      <Route path="/create" exact>
        <Form addMember={addMember} />
      </Route>
      <Route path="/members" exact>
        <MemberList list={list} />
      </Route>
    </Switch> 
    
  </div>
}

export default App;
