export const SHOW_FORM = "[Form] show form"
export const HIDE_FORM = "[Form] hide form"

const initialFormState = {
    formType: "",
    formContent: {
        formData: '',
        submit: ''
    }
}

export const formReducer = (state, action) => {
    const { formType, formData } = action
    switch (action.type) {
        case SHOW_FORM:
            return { formType, formData }

        case HIDE_FORM:
            return initialFormState
        default:
            return state
    }
}