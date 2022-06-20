import React, { useState } from "react";
import * as scormHelper from '../utils/scormHelper';
import JSZip from "jszip";
import { saveAs } from 'file-saver';

const ThirdStage = () => {
    const [questionList, setQuestionList] = useState([{ question: '', answers: [{ answer: '', isValid: false }] }]);
    
    const generateScorm = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(questionList));
        const jsonScorm = scormHelper.generateScormJson(questionList);
        console.log('GENERATED JSON\n');
        console.log(JSON.stringify(jsonScorm));
    }

    return <div className="d-flex flex-column">
        <nav class="navbar navbar-light bg-light"> </nav>
        <p className="w-100">
            <h1 class="display-6 container-fluid d-flex h-100 justify-content-center ">Этап 3: Добавьте вопросы и укажите правильные ответы</h1>
        </p>
        
        <p className="w-100">
        <h2 class="display-7 container-fluid d-flex h-100 justify-content-center ">Кол-во вопросов: {questionList.length}</h2>
        </p>
        <div class="form-group mx-5 ">
        <div class="form-group mx-5 ">
                        <label for="formGroupExampleInput ">Процент правильных ответов для успешного завершения теста</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите значение" onChange={(e) => {
                            
                        }}/>
                    </div>
                    <hr />
                    </div>
        <div className="mx-5">
            <form className='flex-md-row justify-content-center mx-5' onSubmit={(e) => generateScorm(e)}>
                {
                    questionList.map((questionItem, questionIndex) => {
                        return <React.Fragment key={questionIndex}>
                            <div className="d-flex flex-column ">
                                <div className='d-flex flex-row'>
                                    <h2>Вопрос №{questionIndex + 1}</h2>
                                </div>
                                <input type="text" class="form-control"  placeholder={`Вопрос ${questionIndex + 1}`} onChange={(e) => {
                                    let newCollection = [...questionList];
                                    newCollection[questionIndex].question = e.target.value;
                                    setQuestionList(newCollection);
                                }} />
                            </div>
                            <p className='mt-2 mb-1'>
                                Ответы
                            </p>
                            {
                                questionItem.answers.map((answerItem, answerIndex) => {
                                    return <React.Fragment key={answerIndex}>
                                        <input type="text" class="form-control"  placeholder={`Ответ ${answerIndex + 1}`} onChange={(e) => {
                                            let newCollection = [...questionList];
                                            newCollection[questionIndex].answers[answerIndex].answer = e.target.value;
                                            setQuestionList(newCollection);
                                        }} />
                                        <label>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => {
                                                    let newCollection = [...questionList];
                                                    newCollection[questionIndex].answers[answerIndex].isValid = e.target.checked;
                                                    setQuestionList(newCollection);
                                                }}
                                                // name={key}
                                                checked={answerItem.isValid}
                                            />
                                            {`${(answerItem.isValid) ? 'Правильный' : 'Неправильный'}`}
                                        </label>
                                    </React.Fragment>
                                })
                            }
                            <form class="container-fluid d-flex h-100 justify-content-center ">
                            <button className='btn btn-outline-danger btn-sm me-2' type="button" onClick={() => {
                                let newCollection = [...questionList];
                                newCollection[questionIndex].answers.pop();
                                setQuestionList(newCollection);
                            }}>
                                Удалить ответ
                            </button>
                            <button className='btn btn-primary btn-sm me-2' type="button" onClick={() => {
                                let newCollection = [...questionList];
                                newCollection[questionIndex].answers.push({ answer: '', isValid: false });
                                setQuestionList(newCollection);
                            }}>
                                Добавить ответ
                            </button>
                            </form>
                            <hr />
                        </React.Fragment>
                    })
                }
                <div className='d-flex flex-row mx-auto'>

                    
                </div>
                <nav class="navbar fixed-bottom navbar-light bg-light " >
                    <form class="container-fluid d-flex h-100 justify-content-center ">

                        <button type='button' class="btn btn-outline-primary me-2" onClick={e => {
                            window.location.assign('http://localhost:3000/second')
                            }}>
                            Назад
                        </button>
                        <button type="button" class="btn btn-outline-danger me-2" onClick={(e) => {
                            let newCollection = [...questionList];
                            newCollection.pop();
                            setQuestionList(newCollection);
                            
                        }}>Удалить последний вопрос</button>    
                        <button type="button" class="btn btn-primary me-2" onClick={(e) => {
                            let newCollection = [...questionList];
                            newCollection.push({ question: '', answers: [{ answer: '123', isValid: false }] })
                            setQuestionList(newCollection);
                        }}>Добавить новый вопрос</button> 
                        
                        
                        <button type='button' class="btn btn-outline-primary" onClick={(e)=> {
                           
                           
                           window.location.assign('http://localhost:3000/final/')

                            
                        }}>
                            Сгенерировать SCORM-пакет
                        </button>
                    </form>
                    <div>
                    </div>
                </nav>
            </form>
        </div>
    </div>
}

export default ThirdStage;