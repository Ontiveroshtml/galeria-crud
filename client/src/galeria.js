import React, { Fragment, useState, useEffect } from 'react';
import Modal from 'react-modal'



function Galeria() {
    
const [file, setFile] = useState(null)
const [imageList, setimageList] = useState([])
const [listUpdate, setlistUpdate] = useState(false)

const [modalIsOpen, setmodalIsOpen] = useState(false)
const [currentImage, setcurrentImage] = useState(null)
useEffect(() => {

    Modal.setAppElement('body')

    fetch('http://localhost:9000/images/get')
        .then(res => res.json())
        .then(res => setimageList(res))
        .catch(err => {
            console.error(err)
        })
    setlistUpdate(false)
}, [listUpdate])


const selectedHandler = e => {
    setFile(e.target.files[0])
}


const sendHandler = () => {
    if (!file) {
        alert('debes seleccionar una imagen')
        return
    }

    const formdata = new FormData()
    formdata.append('image', file)

    fetch('http://localhost:9000/images/post', {
        method: 'POST',
        body: formdata
    })
        .then(res => res.text())
        .then(res => {
            console.log(res)
            setlistUpdate(true)
        })
        .catch(err => {
            console.error(err)
        })

    document.getElementById('fileinput').value = null

    setFile(null)
}

const modalHandler = (isOpen, image) => {
    setmodalIsOpen(isOpen);
    setcurrentImage(image);
}

const deleteHandler = () => {
    let imageID = currentImage.split('-')
    console.log(imageID[0])
    imageID = parseInt(imageID[0])
    fetch('http://localhost:9000/images/delete/' + imageID, {
        method: 'DELETE'
    })
        .then(res => res.text())
        .then(res => console.log(res))
    setmodalIsOpen(false)
    setlistUpdate(true)
}
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a href="#!" className="navbar-brand">Galeria</a>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-10">
                            <input id="fileinput" onChange={selectedHandler} className="form-control" type="file" />
                        </div>
                        <div className="col-2">
                            <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Subir</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-3' style={{ display: "flex", flexWrap: "wrap" }} >
                {imageList.map(image => (
                    <div className='card m-2'>
                        <img src={'http://localhost:9000/' + image} alt='imagen' className='card-img-top' style={{ height: "200px", width: "300px" }} />
                        <div className='card-body'>
                            <button className='btn btn-dark' onClick={() => modalHandler(true, image)}>Click</button>
                        </div>
                    </div>

                ))}
            </div>

            <Modal style={{ content: { right: "20%", left: "20%" } }} isOpen={modalIsOpen} onRequestClose={() => modalHandler(false, null)}>
                <div className='Card' >
                    <img src={'http://localhost:9000/' + currentImage} alt="imagen" />
                    <div className='card-body'>

                        <button onClick={() => deleteHandler()} className='btn btn-danger'>Borrar</button>
                        <button className='btn btn-primary m-2' onClick={() => setmodalIsOpen(false)}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Galeria