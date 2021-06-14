// import { createAction } from '@ngrx/store';

// export const addEvent = createAction('[Counter Component] AddEvent');
// export const delEvent = createAction('[Counter Component] DelEvent');
// export const reset = createAction('[Counter Component] Reset');


// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Event } from './../models/event.model'

// Section 2
export const ADD_EVENT       = '[EVENT] Add'
export const REMOVE_EVENT    = '[EVENT] Remove'

// Section 3
export class AddEvent implements Action {
    readonly type = ADD_EVENT

    constructor(public payload: Event) {}
}

export class RemoveEvent implements Action {
    readonly type = REMOVE_EVENT

    // constructor(public payload: Event) {}
}

// Section 4
export type Actions = AddEvent | RemoveEvent