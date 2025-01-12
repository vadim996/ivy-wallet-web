import { useState } from "react"
import { Button, Modal } from 'flowbite-react';
import { JSONdata } from "../../hooks/JSONdata";

export const DataButton = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    // function to clear local storage
    function clearStorage() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <div className="mx-auto">
                <Button onClick={() => props.setOpenModal('default')}>
                    Add the URL <i className="fa-solid fa-plus ml-2"></i>
                </Button>
            </div>
            <Modal className="fade-in h-screen" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Add the URL</Modal.Header>
                <Modal.Body className="slide-up">
                    <JSONdata />
                    <div className="flex justify-between mt-5">

                        <button onClick={clearStorage} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>

                        <button onClick={() => setOpenModal('false')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}