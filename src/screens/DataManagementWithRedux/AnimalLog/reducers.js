import { createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../../utilities/helpers'

const name = 'animal'

const initialState = {
    list: {
        status: PENDING,
        animals: []
    },
    form: {
        fields: {
            common_name: null,
            scientific_name: null,
        },
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    error: {
        message: ''
    }
}

const reducers = {
    
    createAnimal: (state) => {
        state.create.status = REQUESTING
    },
    createAnimalResult: (state, { payload }) => {
        state.list.animals = payload
        state.create.status = SUCCESS
    },
    createAnimalError: (state, { payload }) => {
        state.error.message = payload
        state.create.status = ERROR
    },
    createAnimalReset: (state) => {
        state.create = initialState.create
    },
    editAnimal: (state) => {
        state.edit.status = REQUESTING
    },
    editAnimalResult: (state, { payload }) => {
        state.list.animals = payload
        state.edit.status = SUCCESS
    },
    editAnimalError: (state, { payload }) => {
        state.error.message = payload
        state.edit.status = ERROR
    },
    editAnimalReset: (state) => {
        state.edit = initialState.edit
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
  createAnimal,
  createAnimalResult,
  createAnimalError,
  createAnimalReset,
  editAnimal,
  editAnimalResult,
  editAnimalError,
  editAnimalReset,
  setFormField,
} = slice.actions

export default slice.reducer