export const CREATE_REMINDER = "[Reminders] creates a single reminder"
export const DELETE_REMINDER = "[Reminders] deletes a single reminder"
export const UPDATE_REMINDER = "[Reminders] updates a single reminder"
export const DELETE_ALL_DAY_REMINDERS = "[Reminders] deletes every reminder of a specific day"

export const initialReminderState = {
    content: "",
    date: "",
    hours: "",
    location: "",
    identifier: ""
}

export const reminderReducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {

        case CREATE_REMINDER:
            return [...state, payload];
        case DELETE_REMINDER:
            return state.filter(({ identifier }) => identifier !== payload.identifier);
        case UPDATE_REMINDER:
            return state.map((reminder) => {
                const updatedReminder = (reminder.identifier === payload.identifier) ? { ...reminder, ...payload } : reminder
                return updatedReminder
            })
        case DELETE_ALL_DAY_REMINDERS:
            return state.filter(({ date }) => date !== payload.date)

        default:
            return state
    }


}