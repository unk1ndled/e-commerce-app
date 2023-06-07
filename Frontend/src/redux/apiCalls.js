import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }

};
export const register = async (newuser)=>{
  try{
    const ress = await publicRequest.post("/auth/register", newuser);

  }catch(err){
    console.log("can not add user");
  }
}