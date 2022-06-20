import React, { useEffect, useState } from "react";
import "./modal.css"


const Modal = ({active, setActive}) => {
    const [nodeSource, setNodeSource] = useState('');
    const [nodeTarget, setNodeTarget] = useState('');
    const [nodeLabel, setNodeLabel] = useState('');

    
    const [elements, setElement ] = useState([
        { data: { id: 'Радость', label: 'Радость' }, position: { x: 0, y: 0 } },
        { data: { id: 'Грусть', label: 'Грусть' }, position: { x: 100, y: 50 } },
        { data: { id: 'Злость', label: 'Злость' }, position: { x: 0, y: 100 } },
    ]);
    return (
        <div className={active ? " modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            <label>Количество ответов</label>
                        <input type="text" name="label" onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setNodeLabel(newCollection)
                        }}></input>
                        <label>Неправильные</label>
                        <input type='radio'/>
                        <label>Правильные</label>
                        <input type='radio'/>
                        <label>Откуда</label>
                        <select name="target"  onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setNodeSource(newCollection)
                        }}>
                            <option selected disabled>Выберите эмоцию</option>
                            <option value="Радость">Радость</option>
                            <option value="Грусть">Грусть</option>
                            <option value="Злость">Злость</option>
                        </select>

                        <label>Куда</label>
                        <select onChange={(e) => {
                            let newCollection = ''
                            newCollection =  e.target.value
                            setNodeTarget(newCollection)
                        }}>
                            <option selected disabled>Выберите эмоцию</option>
                            <option value="Радость">Радость</option>
                            <option value="Грусть">Грусть</option>
                            <option value="Злость">Злость</option>
                        </select>
                        <button type="submit" class="btn btn-primary" onClick={(e) => {

                            let newCollection = [...elements]
                            newCollection.push({ data: { source: nodeSource, target: nodeTarget, label: nodeLabel} })
                            setElement(newCollection)

                            e.preventDefault();
                            console.log(nodeLabel);
                            console.log(nodeSource);
                            console.log(nodeTarget);
                        }}>Добавить ребро</button>
            </div>
        </div>
    );
};

export default Modal;