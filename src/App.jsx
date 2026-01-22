import "./App.css";

export default function App() {
  const student = {
    name: "Siri",
    regNo: "2500032474",
    dept: "CSE",
    year: "1st Year",
    
  };

  return (
    <div className="page">
      <h1 className="title"> My profile</h1>

      <div className="card">
        <div>
          <img src="profile.png"></img>
        </div>
       

        <h2 className="name">{student.name}</h2>
        <p className="sub">Reg No: <b>{student.regNo}</b></p>

        
           <div className="box">
            <p className="label">Department</p>
            <p className="value">{student.dept}</p>
          </div>
          <div className="box">
            <p className="label">Year</p>
            <p className="value">{student.year}</p>
          </div>
          
          
        </div>

       
      </div>
    
  );
}
