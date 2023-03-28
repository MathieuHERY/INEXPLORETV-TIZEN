import { dataFormat, postData } from "../../mixins/formData";

export const SET_USER_CONNECTED = "SET_USER_CONNECTED";
export const DID_TRY_LOGIN = "DID_TRY_LOGIN";
/* export const LOG_OUT = 'LOG_OUT'; */

const saveDataToLocalStorage = (token, idinrees) => {
  localStorage.setItem(
    "client",
    JSON.stringify({
      token: token,
      id: idinrees,
    })
  );
};

export const tryAutoLogin = () => {
  return async (dispatch) => {
    try {
      console.log("tryAutoLoginCalled");
      const date = new Date().getTime() / 1000;
      const timestamp = Math.round(date);
      const formData = dataFormat();
      const response = await postData("client.inrees", formData);

      if (response.data.status === "success") {
        if (response.data.client.inreestv > timestamp) {
          saveDataToLocalStorage(
            response.data.client.token,
            response.data.client.id
          );
          dispatch({
            type: SET_USER_CONNECTED,
            payload: response.data.client,
          });
          return true;
        } else {
          /*  await dispatch(alertActions.displayAccountExpired()); */
          return false;
        }
      }
    } catch (error) {}
  };
};

export const didTryAutoLogIn = () => {
  return (dispatch) => {
    dispatch({
      type: DID_TRY_LOGIN,
    });
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const date = new Date().getTime() / 1000;
      const timestamp = Math.round(date);
      const formData = dataFormat();
      formData.append("email", userData.email);
      formData.append("password", userData.password);

      const response = await postData("client.inrees", formData);
      console.log(response);
      if (response.data.status === "success") {
        if (response.data.client.inreestv > timestamp) {
          saveDataToLocalStorage(
            response.data.client.token,
            response.data.client.id
          );
          dispatch({
            type: SET_USER_CONNECTED,
            payload: response.data.client,
          });
        } else {
          /* dispatch(
            alertActions.displayAlert(
              "Désolé, nous avons rencontré des problèmes lors de votre connexion",
              "Votre compte n'est plus valide"
            )
          ); */
        }
      } else {
        /*  dispatch(
          alertActions.displayAlert(
            "Désolé, nous avons rencontré des problèmes lors de votre connexion",
            "Votre email ou votre mot de passe n'est pas valide"
          )
        ); */
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
