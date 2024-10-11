import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";
import {collection,query,orderBy,where,getDocs} from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect, useState } from "react";
import JobDescription from "./components/JobDescription";
import ApplicationForm from "./components/ApplicationForm";



function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn","desc"))
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, "=>", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.data().id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  };



   const fetchJobsCustom = async (jobCriteria) => {
     const tempJobs = [];
     const jobsRef = query(collection(db, "jobs"));
     const q = query(
       jobsRef,
       where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title),where("experience", "==", jobCriteria.experience).where("location", "==", jobCriteria.location),
       orderBy("postedOn", "desc")
     );
     const req = await getDocs(q);

     req.forEach((job) => {
       // console.log(doc.id, "=>", doc.data());
       tempJobs.push({
         ...job.data(),
         id: job.data().id,
         postedOn: job.data().postedOn.toDate(),
       });
     });
     setJobs(tempJobs);
   };


  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Searchbar fetchJobsCustom={fetchJobsCustom} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))} */}
      {/* <JobDescription></JobDescription> */}
      <ApplicationForm/>

      
    </div>
  );
}

export default App;
