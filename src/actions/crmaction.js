import axios from 'axios';

export const FETCH_APP_CONTENT2 = "FETCH_APP_CONTENT2";

const url = 'http://localhost:1664/GenericService.svc/TestPost2';
const axconfig = {
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
export function fetchAppContent2(displayContent) {
    const data = {
        param: displayContent
    };
    return (dispatch) => {
        axios.post(url, JSON.stringify(data), axconfig).then((response) => {
            dispatch({type: FETCH_APP_CONTENT2, payload: response.data})
        }).catch((error) => {
            console.log(error.response);
            dispatch({type: FETCH_APP_CONTENT2, payload: error.response.data, error: true, meta: error.response.statusText});
        })
    }
};
