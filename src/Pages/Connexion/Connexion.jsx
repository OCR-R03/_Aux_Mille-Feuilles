import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
  
const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email("Format de l'adresse email incorrect")
    .required("Email obligatoire"),
  
    password: Yup.string()
    .min(3, "Le mot de passe doit contenir 3 caratères au minimun")
    .required("Mot de passe obligatoire"),
});
  
class Login extends React.Component {
    
    render() {
        
        return (
        
        <div className="Container_Login">
            <div className="row">
                <div className="col-lg-12">
                    <Formik 
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema} 
                        onSubmit={(values) => {
                            console.log(values); 
                            alert("Form is validated! Submitting the form...");
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                        !isSubmitting ? (
                        
                        <div>
                            
                            <div className="row mb-5">
                                
                                <div className="col-lg-12 text-center">
                                    
                                    <h1 className="mt-5">Se connecter</h1>
                                
                                </div>
                            </div>
                            
                            <Form>
                                
                                <div className="form-group">
                                    
                                    <label className="mt-6" htmlFor="email">Email</label>
                                    
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Entrer email"
                                        autocomplete="off"
                                        className={`mt-2 form-control
                                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    />
                                    
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                        
                                <div className="form-group">
                            
                                    <label htmlFor="password" className="mt-3">
                                        Mot de passe
                                    </label>
                            
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Entrer mot de passe"
                                        className={`mt-2 form-control
                                        ${
                                        touched.password && errors.password
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                    />
                            
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                        
                                </div>
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                >
                        
                                    Se connecter
                        
                                </button>
                            
                            </Form>
                        </div>
                    ) : (
                    
                    <div>
                        
                        <h1 className="p-3 mt-5">Formulaire soumis</h1>
                        
                        <div className="alert alert-success mt-3">
                            Vous êtes connecté !
                        </div>
                        
                
                    </div>
                    )
                }
                </Formik>
            </div>
            </div>
        </div>
        );
    }
}
  
export default Login;