import {ComputerScience, Electrical, Mechanical, BioTech} from './data'
import CodeIcon from '@material-ui/icons/Code';
import './Experiment3.css' ;
import {useState} from 'react'
import {Button} from '@material-ui/core'
 
const Experiment3 = () => {
  
	const [dept, setDept] = useState(ComputerScience)
	const changeView = (dept) => {
		setDept (dept);
	}
  
	return (
    <div className="container"> 
    <div id="bar" >
    <Button id="s2" size="medium" variant="contained" color="primary" onClick = {() => changeView(ComputerScience)} endIcon={<CodeIcon />}>  CSE </Button>
    <Button id="s2"size="medium" variant="contained" color="primary" onClick = {() => changeView(Electrical)} > ECE </Button>
    <Button id="s2" size="medium" variant="contained" color="primary" onClick = {() => changeView(Mechanical)}> Mech </Button>
    <Button id="s2" size="medium" variant="contained" color="primary" onClick = {() => changeView(BioTech)}> Bio Tech </Button>
    </div>
      <p id="sign"> 2000031337 : S SOUMYA PRASAD <span id="headline">MSWD SKill 3 - Material UI</span></p>
     <table className="tab">
       <tr>
         <td>
         <img src = {dept[0].imageUrl} alt = "CSE building" width = '850' />
         </td>
         <td>
           <table className="tab2">
             <tr> <td><p className="Deptname"> {dept[0].displayName} </p></td> </tr>
             <tr> <td><p > HoD : <span className="DeptHoD">{dept[0].hod}</span> </p></td> </tr>
             <tr> <td> <p className="Deptdata"> {dept[0].description} </p></td> </tr>
             <tr> <td><p> <span >Programs Offered in {dept[0].displayName} Department </span><span id="programlist">
      {dept[0].programsOffered.map(
        item=>( <li>{item}</li>)
      )}
        </span>
      </p></td> </tr>
           </table>
         </td>
       </tr>
       </table> 
    </div>
    )
}
export default Experiment3;