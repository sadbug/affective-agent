import React, { useState } from "react";
import ReactFileReader from "react-file-reader";

const FirstStage = () => {
    const [questionList, setQuestionList] = useState([{ question: '', answers: [{ answer: '', isValid: false }] }]);
    const [elements, setElement ] = useState([]);
    const [image, setImage ] = useState([]);
    const [idLabel, setIdLabel] = useState('');
    const generateScorm = (e) => {
        e.preventDefault();
        debugger;
        console.log(JSON.stringify(questionList));
    }

    {/*const handleFiles = (files) => {
        let newImageCollection = [...image];
        newImageCollection.push(files.base64)
        setImage(newCollection);
        
    }  */}
    
    return <div className="">
        
         <nav class="navbar navbar-light bg-light"> 
            
        </nav>
       
        <p className="w-100">
        <h1 class="display-6 container-fluid d-flex h-100 justify-content-center ">Этап 1: Выберите эмоции и загрузите для них изображения</h1>
        </p>
        
        
        <div className="d-flex flex-column">
            <form className='flex-row mx-auto' onSubmit={(e) => generateScorm(e)}>
                {
                    questionList.map((questionItem, questionIndex) => {
                        return <React.Fragment key={questionIndex}>
                            <div className="d-inline-flex mb-4">
                                <div className='d-flex flex-row me-2 '>
                                <td class="col-md-8 mx-auto " >{questionIndex + 1}.</td>
                                </div>

                                 {/*<ReactFileReader fileTypes={[".png",".jpg"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                                    <button className='btn' onClick={handleFiles()}>Выберите файл</button>
                    </ReactFileReader> */}

                                <div class="input-group me">

                                    <input type="text" class="form-control" placeholder={`Эмоция ${questionIndex + 1}`} onChange={(e) => {
                                        let newCollection = ''
                                        newCollection =  e.target.value
                                        setIdLabel(newCollection)   
                                    }} />
                                    
                                        <input type="file" class="form-control" id="inputGroupFile01" onChange={(e) => {

                                                 let newCollection = [...elements]
                                                 newCollection.push({ data: { id: idLabel, label: idLabel }, position: { x: 400, y: 100 } })
                                                 setElement(newCollection)
                      
                                                 e.preventDefault();
                                                 console.log(elements);

                                        }} />

                                </div>
                            </div>
                          
                            
                            <br/>
                            <div></div>
                        </React.Fragment>
                    })
                }
                
                <nav class="navbar fixed-bottom navbar-light bg-light ">
                    <form class="container-fluid d-flex h-100 justify-content-center ">
                        
                        <button type="button" class="btn btn-outline-danger me-2"  onClick={(e) => {
                            let newCollection = [...questionList];
                            newCollection.pop();
                            setQuestionList(newCollection);
                            }}>
                            Удалить
                        </button>

                        <button type='button' class="btn btn-primary me-2" onClick={(e) => {
                            let newCollection = [...questionList];
                            newCollection.push({ question: '', answers: [{ answer: '123', isValid: false }] })
                            setQuestionList(newCollection);
                        }}>
                            Добавить
                        </button>
                        
                        
                        <button type='button' class="btn btn-outline-primary" onClick={(e)=> {
                           
                           
                           window.location.assign('http://localhost:3000/second/')

                            
                        }}>
                            Далее
                        </button>
                    </form>
                <div>
                   

                    
                </div>
                </nav>
                
            </form>
        </div>
    </div>

}

export default FirstStage