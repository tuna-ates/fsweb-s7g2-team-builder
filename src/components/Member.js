import { Card,CardHeader,CardBody,CardTitle,CardText} from "reactstrap";
import "./Member.css";
const Member=(props)=>{
    const {member}=props;
  return <div className="member">
     <Card
    className="memberCard"
    color="success"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
     {member.name}-{member.surname}
    </CardHeader>
    <CardBody>
      <CardText>
       <strong color="red">E-mail: </strong>{member.email}
      </CardText>
      <CardText>
      <strong>Yaş: </strong>{member.age}
      </CardText>
    </CardBody>
  </Card>
  </div>   
}
export default Member;