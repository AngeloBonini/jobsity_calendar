import { format, addMonths, subMonths } from 'date-fns'

export const NEXT_MONTH = "[Calendar] moves to the next month";
export const PREVIOUS_MONTH = "[Calendar] moves to the previous month";

export const initialCalendarState = {
    currentDate: format(new Date(), "MM-yyyy"),
    // year: format(new Date(), "yyyy")
}

export const calendarReducer = (state, action) => {
    switch (action.type) {
        case NEXT_MONTH:
            return addMonths(state.currentDate, 1)
        case PREVIOUS_MONTH:
            return subMonths(state.currentDate, 1)
        default:
            return state;
    }
}