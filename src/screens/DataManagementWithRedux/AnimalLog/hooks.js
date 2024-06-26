import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = () => {
  const dispatch = useDispatch()
  const fields = useSelector(state => state.animal.form.fields)

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useNewAnimal = () => {
  const dispatch = useDispatch()

  return {
      onSubmit: () => {
        console.log('Dispatching CREATE_ANIMAL action')
        dispatch(actions.createAnimal())
      }
  }
}

export const useEditAnimal = (animalId) => {
  const dispatch = useDispatch()

  return {
      onSubmit: () => {
        console.log('Dispatching EDIT_ANIMAL action')
        dispatch(actions.editAnimal(animalId))
      }
  }
}

export const useListAnimals = () => {
  return useSelector(state => state.animal.list.animals)
}