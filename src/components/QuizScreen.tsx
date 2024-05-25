import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../components/QuizScreen.css"
import { useState } from "react";

export default function QuizScreen(props: {
    quizArray?: any;
}) {
    const { quizArray } = props;
    let marks = 0;
    const [currentIndex, setCurrentIndex] = useState(0);


    let checkAnswer = (e:any) => {
        const correctAns =   quizArray[currentIndex].correctAns;
        if(correctAns == e.target.outerText){
            console.log("match");
            marks = quizArray[currentIndex].questMarks;
        }else
        {
            console.log("not match");
        }
    }

    return (
        <div className="conatiner-fluid g-0 rounded-4 shadow border border-light w-100 p-5">
            <div className="container w-100">
                <div className="row mb-3 d-flex justify-content-between">
                    <div className="col-md-6 text-start  d-flex gap-3">
                        <label htmlFor="Quest" className="text-start "><strong>Question :</strong> </label>
                        <label htmlFor=""><sup>{currentIndex + 1}</sup>/{quizArray.length} </label>
                    </div>
                    <div className="col-md-6 text-end" >
                        <label htmlFor=""><strong>Marks :</strong> {quizArray[currentIndex].questMarks} </label>
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
                        quizArray[currentIndex].options.map((x: any, i: any) => (
                            <div className="col-md-6 mb-3" key={i}>
                                <button type="button" name="option1" onClick={checkAnswer} className="btn rounded-pill px-5 w-100 btn-options">{x}</button>
                            </div>

                        ))}
                </div>
                <div className="d-flex gap-3 justify-content-center">
                    <button type="button" className="btn btn-secondary px-5" onClick={() => {
                        setCurrentIndex(
                            currentIndex - 1 < 0 ? 0 : currentIndex - 1

                        );
                    }}>Back</button>
                    <button type="button" className="btn btn-primary px-5" onClick={() => {
                        setCurrentIndex(
                            (currentIndex + 1) > (quizArray.length - 1) ? (quizArray.length - 1) : currentIndex + 1)
                    }}>Next</button>
                </div>
            </div>
        </div>
    );
}
