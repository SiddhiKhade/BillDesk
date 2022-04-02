import { Table } from "react-bootstrap";
const Home = (props) => {
  return (
    <div>
        <h3> Home </h3>
<Table responsive striped bordered hover variant="dark">
  
  <tbody class="tab">
  <tr>
      <th >ID:</th>
      <td>{props.info.id}</td>
     
      
    </tr>
    <tr>
      <th scope="row">Name:</th>
      <td>{props.info.full_name}</td>
      
      
    </tr>
    <tr>
      <th >Role ID:</th>
      <td >{props.info.RoleId}</td>
      
    </tr>
    <tr>
      <th >Role Name:</th>
      <td >{props.info.role}</td>
      
    </tr>
    <tr >
      <th >Token:</th>
      <td class="token">{props.info.token}</td>
      
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default Home