import React, { useEffect, useState} from 'react'
import { db } from './firebase'
import JobCard from './JobCard'
import { useStateValue } from './StateProvider';

function AssignJob() {

    const [{user},dispatch] = useStateValue();
    const [job,setJob] = useState([]);
    const [availJob,setAvailJob] = useState();
    
    useEffect(() => {
        db
        .collection('Registered_Employees')  
        .onSnapshot(snapshot => (
            setJob(snapshot.docs.map(doc => ({
                data: doc.data()
            })))
        ))
        console.log(job);
  },[])



//   useEffect(() => {
//     db
//     .collection('User_Bookings')  
//     .onSnapshot(snapshot => (
//         setAvailJob(snapshot.docs.map(doc => ({
//             data: doc.data()
//         })))
//     ))
//     console.log(availJob);
// },[])

  const handleRemove = (e) => {
    var value = e.target.value
    db.collection('Registered_Employees').doc(value).update({
      blackListed : "true"
  })

  }

  const handleAssign = (e) => {
    var value = e.target.value
    db.collection('Registered_Employees').doc(value).update({
      job : availJob
  })
  }

  const handleChange = (e) => {
    setAvailJob(e.target.value)
  }


  
const handleAdd = (e) => {
  var value = e.target.value
  db.collection('Registered_Employees').doc(value).update({
    blackListed : "false"
})
}

  return (
    <div>
      { job.map(job => (
                  <JobCard 
                    role = "Service Provider"
                    id= "card"
                    name = {job.data.name}
                    number = {job.data.number}
                    email = {job.data.email}
                    age = {job.data.age}
                    address = {job.data.address}
                    specialization = {job.data.specialization}
                    availability = {job.data.status}
                    blacklist = {job.data.blackListed}
                    handleRemove = {handleRemove}
                    handleAssign ={handleAssign}
                    handleChange = {handleChange}
                    handleAdd = {handleAdd}
                   />
               ))}
    </div>


  )
}

export default AssignJob