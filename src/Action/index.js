export const settablenumber = (value) => async dispatch => {
    dispatch({
        type: "SETABLENUMBER",
        payload:value
    })
}

export const resettablenumber = () => async dispatch => {
    dispatch({
        type: "RESETTABLENUMBER"
       
    })
}

export const setfilter = (value) => async dispatch => {
    dispatch({
        type: "SETFILTER",
        payload:value
    })
}

export const resetfilter = () => async dispatch => {
    dispatch({
        type: "RESETfilter"
       
    })
}

export const addorder = (id,name,prize,table_name,url) => async dispatch => {
    dispatch({
        type: "ADDORDER",
        payload: {
            id: id,
            name: name,
            prize: prize,
            table_name: table_name,
            url :url
        }
    })
}
