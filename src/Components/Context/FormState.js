import React, { useReducer } from "react";
import FormContext from "./FormContext.js";
import FormReducer from "./FormReducer.js";
import { ADD_DATA} from "./types.js";

const FormState = (props) => {
  
  const initialState = {
      name: "",
      currentProfession: "",
      socialLinks: {
        linkedin: "",
        github: "",
        phone: "",
        website: "",
        email: "",
      }, 
      displayPicture:`https://media-exp1.licdn.com/dms/image/C560BAQHHc8_ZXqlECg/company-logo_200_200/0/1598610482399?e=2147483647&v=beta&t=q7AuQNFYU_s0QVYlW5qVC6Po718mYeOXRDeWgGwFZKw`,
      educations: [
        {
          institution_name: "",
          enroll_year: "",
          passout_year: "",
          grades: "",
        }
      ], 
      skills: [
        {
            skillName:"",
            proficiency:""
        },
    ],
    experiences: [
        {
            title: "",
            period: "",
            organization: "" 
        },
    ]
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const addData = (data) => {
    dispatch({ type: ADD_DATA, payload: data });
  };

  return (
    <FormContext.Provider
      value={{
      name:state.name,
      currentProfession:state.currentProfession,
      socialLinks: state.socialLinks,
      displayPicture:state.displayPicture,
      educations: state.educations, 
      skills: state.skills,
      experiences: state.experiences,
        addData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormState;
