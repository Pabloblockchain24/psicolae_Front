/*Import styles*/
import './reservaForm.css'

/*Import dependencies*/
import React from 'react'
import { Form, Formik } from 'formik'

/*Import context functions*/
import { useCitas } from "../../context/CitasContext"


function reservaForm() {
    const { createCita } = useCitas()

    return (
        <Formik
            initialValues={{
                Nombre: '',
                Description: ''
            }}
            onSubmit={async (values) => {
                console.log(values) 
                try {
                    const response = await createCita(values)
                    console.log(response)
                } catch (error) {
                    console.error(error)
                }
            }}
        >
    {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name='Nombre' placeholder='Write your name' onChange={handleChange} />

            <label>Description</label>
            <textarea name='Description' rows="3" placeholder='Write a description' onChange={handleChange} />

            <button type='submit'> Save </button>
        </Form>
    )}
        </Formik >
    )
}

export default reservaForm