import React, { useRef, useState, useEffect} from 'react';


import './Dropzone.css';

const UploadImages = ({parentCallback}) => {
    const fileInputRef = useRef();
    const modalImageRef = useRef();
    const modalRef = useRef();
    
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
        }, []);
        setValidFiles([...filteredArr]); 
        parentCallback([...filteredArr]) 
    }, [selectedFiles]);

    const preventDefault = (e) => {
        e.preventDefault();
    }

    const dragOver = (e) => {
        preventDefault(e);
    }

    const dragEnter = (e) => {
        preventDefault(e);
    }

    const dragLeave = (e) => {
        preventDefault(e);
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }  
    }

    const textSelected = (val, name) => {
        const index = validFiles.findIndex(e => e.name === name);
      
        let copy = [...validFiles]
        copy[index]['notes'] = (val) 
        setValidFiles(copy);
        console.log(validFiles[index])   
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const handleFiles = (files) => {
        setErrorMessage('');
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } 
            else {
                setErrorMessage('File type not permitted');
            }   
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/heic'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) {
          return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        const index = validFiles.findIndex(e => e.name === name);
        const index2 = selectedFiles.findIndex(e => e.name === name);
        validFiles.splice(index, 2);
        selectedFiles.splice(index2, 1);
        fileInputRef.current.value = "";
        setValidFiles([...validFiles]);
        setSelectedFiles([...selectedFiles]);
    }

    const openImageModal = (file) => {
        const reader = new FileReader();
        modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    const closeModal = () => {
        modalRef.current.style.display = "none";
        modalImageRef.current.style.backgroundImage = 'none';
    }

    
    
    return (
        <>
            <label className="label-upload">Upload Photos:</label>
            <div className="container">
                <a className="buttoncustom tick"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onClick={fileInputClicked}>
                    <input
                        ref={fileInputRef}
                        className="file-input"
                        type="file"
                        multiple
                        onChange={filesSelected}
                    />
                </a> 
            </div>
            <span className='file-error-message'>{errorMessage}</span>
            <div className="file-display-container">
                    {
                        validFiles.map((data, i) => 
                            <div className="card" key={i}>
                                <div className="file-remove" onClick={() => removeFile(data.name)}>x</div>
                                <div>
                                    <img className='ImagePrev' src={URL.createObjectURL(data)} onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}/>
                                </div>
                                <textarea key={i} value={data.notes} onChange={(e) => textSelected(e.target.value, data.name) } className='card-text' placeholder="Notes"/>
                            </div>
                        )
                    }      
            </div>
            <div className="modal" ref={modalRef}>
                <div className="overlay"></div>
                <span className="close" onClick={(() => closeModal())}>X</span>
                <div className="modal-image" ref={modalImageRef}></div>
            </div>
        </>           
    );
}

export default UploadImages;