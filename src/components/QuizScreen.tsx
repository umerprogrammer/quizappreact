import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../components/QuizScreen.css"
import { useState } from "react";

export default function QuizScreen(props:{
    //inputQuest:string;
    // option1:string;
    // option2:string;
    // option3:string;
    // option4:string;
    quizArray?:any;
}) {
    //,option1,option2,option3,option4
    const {quizArray} = props;
    const [currentIndex,setCurrentIndex] = useState(0);
  return (
    <div className="conatiner-fluid g-0 rounded-4 shadow border border-light w-100 p-5">
      <div className="container w-100">
        <div className="row mb-3 d-flex justify-content-between">
            <div className="col-md-12 text-start w-100 d-flex gap-3">  
        <label htmlFor="Quest" className="text-start ">Question :</label>
        <label htmlFor=""><sup>{currentIndex+1}</sup>/{quizArray.length} </label>
        </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-12">
                <div className="form-group text-start">        
                   
                    <input value={quizArray[currentIndex].question} className="form-control form-control-sm py-2" type="text" name="question" id="Quest" disabled />
                </div>
            </div>
        </div>
        <div className="row mb-3">
        {
        
            quizArray[currentIndex].options.map((x:any,i:any)=>(
                <div className="col-md-6 mb-3">
                 <button type="button" name="option1" className="btn border-light rounded-pill text-white px-5 w-100 btn-options">{x}</button>
                </div>
                
            ))}
       
           
        </div>
      
        <div className="d-flex gap-3 justify-content-center">
        <button type="button" className="btn btn-secondary px-5" onClick={()=>{
            setCurrentIndex(
                currentIndex -1 < 0 ? 0 : currentIndex-1
                
            );
        }}>Back</button>
        <button type="button" className="btn btn-primary px-5" onClick={()=>{
            setCurrentIndex(
              (currentIndex + 1) > (quizArray.length-1) ? (quizArray.length-1) : currentIndex+1)
        }}>Next</button>
        </div>
      </div>
    </div>
  );
}
