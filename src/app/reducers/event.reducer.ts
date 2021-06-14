import { Action } from '@ngrx/store'
import { Event } from './../models/event.model'
import * as EventActions from './../actions/event.actions'

// Section 1
const initialState: Event = {
    _id: 1,
    location: 'Summerhill',
    date : '11/06/2021',
    name: 'Abhishek'
}

// Section 2
export function eventReducer(state: Event[] = [initialState], action: EventActions.Actions) {

    // Section 3
    switch(action.type) {
        case EventActions.ADD_EVENT:
            return [...state, action.payload];
        default:
            return state;
    }
}