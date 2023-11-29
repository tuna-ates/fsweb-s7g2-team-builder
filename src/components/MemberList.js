import Member from "./Member";
import "./MemberList.css";

const MemberList = (props) => {
  const { list } = props;

  return (
    <div className="memberList">
      <h2>Üyelerin Listesi</h2>
     
        <div className="members">
          {list.map((member) => {
            return <Member member={member} />;
          })}
        </div>
   
    </div>
  );
};
export default MemberList;
