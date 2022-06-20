import React, { useState } from "react";
import CytoscapeComponent from 'react-cytoscapejs';
import Modal from "./Modal/Modal";
import FirstStage from "./firstStage";


const SecondStage = () => {
    const [modalActive, setModalActive] = useState(Boolean)
    const [edgeSource, setEdgeSource] = useState('');
    const [edgeTarget, setEdgeTarget] = useState('');
    const [edgeLabel, setEdgeLabel] = useState('');

    const [elements, setElement ] = useState([
        { data: { id: 'Радость', label: 'Радость' }, position: { x: 400, y: 100 } },
        { data: { id: 'Грусть', label: 'Грусть' }, position: { x: 400, y: 100 } },
        
        
    ]);
    
    return <div className="">
            <nav class="navbar navbar-light bg-light"> </nav>
            <Modal active={modalActive} setActive={setModalActive}/>
                 <p className="w-100">
                    <h1 class="display-6 container-fluid d-flex h-100 justify-content-center ">Этап 2: Задайте переходы между эмоциями</h1>
                </p>
                <div class="container-fluid d-flex h-100 justify-content-center ">

                <CytoscapeComponent elements={elements} 
                style={ { 'width': '85%', 'height': '280px','background-color': '#f2f2f2'} }
                stylesheet={[
                    {
                      selector: 'node',
                      style: {
                        'width': 'label',
                        'height': 20,
                        'shape': 'round-rectangle',
                        'content': 'data(label)',
                        'text-valign': 'center',
                        'color': 'white',
                        'text-outline-width': 2,
                        'border-width': 12,
                        'border-color': '#bbbbbb',
                        'text-outline-color': '#bbbbbb',
                        'background-color': '#bbbbbb',
                      }
                    },
                    
                    {
                        selector: ':selected',
                        style: {
                          'width': 'label',
                          'height': 20,
                          'shape': 'round-rectangle',
                          'content': 'data(label)',
                          'text-valign': 'center',
                          'color': 'white',
                          'text-outline-width': 2,
                          'border-width': 12,
                          //'border-color': '#33BBD9',
                          'border-color': '#007BFF',
                          'text-outline-color': '#007BFF',
                          'background-color': '#007BFF',
                        }
                      },
                    {
                      selector: 'edge',
                      style: {
                        'width': 2,
                        'target-arrow-shape': 'triangle',
                        'line-color': '#aaaaaa',
                        'target-arrow-color': '#aaaaaa',
                        'curve-style': 'bezier',
                        'content': 'data(label)',
                        'text-valign': 'top',
                        'text-margin-y': -12,
                        'color': '#212121',
                      }
                    }
                ]}/>

                </div>
                
                <div>
                <form className='mx-5' >
                   
                    {/* <div class="btn-group">
                        <input type="radio" class="btn-check" name="options" id="radio1" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="radio1">По количеству ответов</label>
    
                        <input type="radio" class="btn-check" name="options" id="radio2" autocomplete="off" checked/>
                        <label class="btn btn-outline-primary" for="radio2">По проценту правильных ответов</label>

                    </div> */}
                    <div class="form-group mx-5">
                        <label for="formGroupExampleInput">Количество или процент ответов</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите значение" onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setEdgeLabel(newCollection)
                        }}/>
                    </div>
                   
                    <div class="form-group mx-5">
                        <label for="formGroupExampleInput">Откуда</label>
                        <select class="form-select" name="target"  onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setEdgeSource(newCollection)
                        }}>
                            <option selected disabled>Выберите эмоцию</option>
                            <option value="Радость">Радость</option>
                            <option value="Грусть">Грусть</option>
                          
                        </select>
                        
                        <label for="formGroupExampleInput">Куда</label>
                        <select class="form-select" onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setEdgeTarget(newCollection)
                        }}>
                            <option selected disabled>Выберите эмоцию</option>
                            <option value="Радость">Радость</option>
                            <option value="Грусть">Грусть</option>
                        
                        </select>
                    </div>
                </form>
                    
                </div>
               
               
                <nav class="navbar fixed-bottom navbar-light bg-light " >
                    <form class="container-fluid d-flex h-100 justify-content-center ">

                        <button type='button' class="btn btn-outline-primary me-2" onClick={e => {
                            window.location.assign('http://localhost:3000/')
                            }}>
                            Назад
                        </button>
                        <button type="button" class="btn btn-outline-danger me-2" onClick={(e) => {

                            let newCollection = [...elements]
                            newCollection.pop()
                            setElement(newCollection)

                            e.preventDefault();
                            console.log(edgeLabel);
                            console.log(edgeSource);
                            console.log(edgeTarget);
                            }}>Удалить переход</button>    

                        <button type="button" class="btn btn-primary me-2" onClick={(e) => {
                            
                            let newCollection = [...elements]
                            newCollection.push({ data: { source: edgeSource, target: edgeTarget, label: edgeLabel} })
                            setElement(newCollection)

                            e.preventDefault();
                            console.log(edgeLabel);
                            console.log(edgeSource);
                            console.log(edgeTarget);

                        }}>Добавить переход</button> 
                        
                        <button type='button' class="btn btn-outline-primary" onClick={(e) => {
                           
                           window.location.assign('http://localhost:3000/third/')
                        }}>
                            Далее
                        </button>
                    </form>
                    <div>
                    </div>
                </nav>
                
            </div>
            

            
    
}
export default SecondStage;