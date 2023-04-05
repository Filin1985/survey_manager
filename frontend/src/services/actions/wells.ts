import { AppDispatch } from "../store"

// export const addNewWell =
//   (
//     customer: string,
//     contractor: string,
//     field: string,
//     rig: string,
//     well_number: string,
//     status: string
//   ) =>
//   (dispatch: AppDispatch) => {
//     dispatch({
//       type: ADD_NEW_WELL_REQUEST,
//     })
//     apiRequest<IWellsResponse>(`${API_URL}/wells/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         customer: customer,
//         contractor: contractor,
//         field: field,
//         rig: rig,
//         well_number: well_number,
//         status: status,
//       }),
//     })
//       .then((res) => {
//         if (res) {
//           dispatch({
//             type: ADD_NEW_WELL_SUCCESS,
//           })
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: ADD_NEW_WELL_FAILED,
//         })
//         console.log(error)
//       })
//   }
