import axios from "axios";

const serverUrl = "https://be-a-saviour-react-native.herokuapp.com/api/v1";
// const serverUrl = "http://192.168.9.140/4000/api/v1";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${serverUrl}/me`);
    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const addLocation = (lat,long) => async (dispatch) => {
  try {
    dispatch({ type: "addLocationRequest" });

    const { data } = await axios.post(
      `${serverUrl}/addlocation`,
      {
        lat,
        long,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addLocationSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addLocationFailure", payload: error.response.data.message });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    await axios.get(`${serverUrl}/logout`);
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });

      const { data } = await axios.put(
        `${serverUrl}/updatepassword`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "updatePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verificationRequest" });

    const { data } = await axios.post(
      `${serverUrl}/verify`,
      { otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "verificationSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "verificationFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const { data } = await axios.post(
      `${serverUrl}/forgetpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (otp, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${serverUrl}/resetpassword`,
      { otp, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};
