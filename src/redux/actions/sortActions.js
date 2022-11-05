import * as actionTypes from "./actionTypes"

export const sortByMin=()=>({
    type:actionTypes.SORT_BY_MIN,
    payload:1
})

export const sortByMax=()=>({
    type:actionTypes.SORT_BY_MAX,
    payload:1
})

export const sortByNew=()=>({
    type:actionTypes.SORT_BY_NEW,
    payload:2
})

export const sortByOld=()=>({
  type:actionTypes.SORT_BY_OLD,
  payload:2
})