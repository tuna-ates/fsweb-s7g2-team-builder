import Member from "./Member";


const MemberList=(props)=>{
   const {list}=props;


    return <div className="memberList12">
        <>
         {list.map((member)=>{
            return <Member member={member}/>
         })}
        </>
      
         
      
    </div>   
  }
  export default MemberList;