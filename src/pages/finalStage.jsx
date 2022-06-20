import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

const FinalStage = () => {

    return <div className="">
        
    <nav class="navbar navbar-light bg-light"> 
       
   </nav>
   <p className="w-100">
        <h1 class="display-6 container-fluid d-flex h-100 justify-content-center ">SCORM-пакет успешно сгенерирован!</h1>
        </p>
        
   <nav class="navbar fixed-bottom navbar-light bg-light ">
                    <form class="container-fluid d-flex h-100 justify-content-center ">
                        
                        <button type="button" class="btn btn-outline-primary me-2"   onClick={(e) => {
                            window.location.assign('http://localhost:3000/third/')
                            }}>
                            Назад
                        </button>

                      
                        <button type='button' className="btn btn-success"onClick={(e) => {
                           var zip = new JSZip();

                           zip.file("imsmanifest.xml");

                           var data = zip.folder("data");
                           data.file(images, {base64: true});
                            
                           var res = zip.folder("res");
                           res.file(data);
                           res.file("index.html");

                           zip.generateAsync({type:"blob"})
                           .then(function(content) {
                             
                               saveAs(content, "test.zip");
                           });
                        }}>
                            Скачать SCORM-пакет
                        </button>
                        
                    </form>
                <div>
                   

                    
                </div>
                </nav>
   </div>

}
export default FinalStage
