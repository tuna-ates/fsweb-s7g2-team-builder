const Member=(props)=>{
    const {member}=props;
  return <div className="member">
     <p>{member.id}--{member.name}--{member.surname}</p>
  </div>   
}
export default Member;