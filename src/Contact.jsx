// with JOI Validation

import React, { Component, useState } from "react";
import  Joi  from "joi-browser";
import emailjs from "emailjs-com";

class Contact extends Component {
    state = {
        data: {
            fullname: "",
            username: "",
            phone: "",
            email: "",
            password: "",
            message: ""
        },
        errors: {}
    };
    schema = {
        fullname: Joi.string().required().label('Fullname'),
        username: Joi.string().required().label('Username'),
        phone: Joi.string().required().label('Phone'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(6).max(10).required().label('Password'),
        message: Joi.string().required().label('Message')
    }
    
    validate = () => {
        const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false});
        if(!error) return null;

        const errors = {};
        for (let item of error.details)
        errors[item.path[0]] = item.message;
        return errors;
    }

     handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors || {} });
        if(errors) return;

        emailjs.sendForm('service_2u692ae','template_docg5g6',e.target,'user_Dh0YsMnLOPp5ckc48VOcP').then(res=>{
            alert('Thank You For Choosing Us! Email has been sent to our HR, You will soon get the response. Press "Ok" to continue.');
        }).catch(err=> alert('Thank You For Choosing Us! Email has been sent to our HR, You will soon get the response. Press "Ok" to continue.'));
        // alert(
        //                     `Hey ${this.state.data.fullname}! Welcome to Falcon IT. You are now a member of MERN Team.
        //                     Press "Ok" to continue. `);
    }

     handleChange=(e) => {
        const data= {...this.state.data};
        data[e.currentTarget.name]= e.currentTarget.value;
        this.setState({data});
    }

    render() {
        return (
           
            <div className="container contact_div">
            <div>
                <h1 className="my-3">
                <h1 className="text-center">Contact Us</h1>
                </h1>
            </div>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">   
                        <form on onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="fullname">Fullname</label>
                                <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Enter Your fullname"
                                value={this.state.data.fullname} onChange={this.handleChange}/>
                                {this.state.errors.fullname && <div className="alert alert-danger">{this.state.errors.fullname}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" id="username" placeholder="enter a Unique username"
                                value={this.state.data.username} onChange={this.handleChange}/>
                                {this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="03*********"
                                value={this.state.data.phone} onChange={this.handleChange}/>
                                {this.state.errors.phone && <div className="alert alert-danger">{this.state.errors.phone}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" id="email" placeholder="xyz@gmail.com"
                                value={this.state.data.email} onChange={this.handleChange}/>
                                {this.state.errors.email && <div className="alert alert-danger">{this.state.errors.email}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="At least 8 characters"
                                value={this.state.data.password} onChange={this.handleChange}/>
                                {this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" name="message" id="message" rows="3" placeholder="Give your Feedback"
                                value={this.state.data.message} onChange={this.handleChange}></textarea>
                                {this.state.errors.message && <div className="alert alert-danger">{this.state.errors.message}</div>}
                            </div>

                            
                        <div class="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}
       export default Contact;


























// without joi validation



// import React, { useState } from "react";

// const Contact = () => {
//     const [data, setData] = useState({
//         fullname:"",
//         phone:"",
//         email:"",
//         msg:"",
//     });

//     const InputEvent = (event) => {
//         const {name, value} = event.target;

//         setData((preVal) => {
//             return {
//                 ...preVal,
//                 [name] : value,
//             };
//         });
//     };

//     const formSubmit = (e) => {
//             e.preventDefault();
//             alert(
//                 `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say " ${data.msg} ". `
//             );
//     };
//     return (
//         <>
//           <div className="my-5">
//               <h1 className="text-center">Contact Us</h1>
//           </div>
//               <div className="container contact_div">
//                   <div className="row">
//                       <div className="col-md-6 col-10 mx-auto">
//                         <form onSubmit={formSubmit}>
//                             <div class="mb-3">
//                                   <label 
//                                   for="exampleFormControlInput1" 
//                                   class="form-label"
//                                   >FullName
//                                   </label>
//                                   <input 
//                                   type="text" 
//                                   class="form-control" 
//                                   id="exampleFormControlInput1" 
//                                   name="fullname"
//                                   value={data.fullname}
//                                   onChange={InputEvent}
//                                   placeholder="Enter Your Name"
//                                   required
//                                   />
//                             </div>
//                             <div class="mb-3">
//                                   <label 
//                                   for="exampleFormControlInput1" 
//                                   class="form-label"
//                                   >Phone
//                                   </label>
//                                   <input 
//                                   type="number" 
//                                   class="form-control" 
//                                   id="exampleFormControlInput1" 
//                                   name="phone"
//                                   value={data.phone}
//                                   onChange={InputEvent}
//                                   placeholder="mobile number"
//                                   required
//                                   />
//                             </div>
//                             <div class="mb-3">
//                                   <label 
//                                   for="exampleFormControlInput1" 
//                                   class="form-label"
//                                   >Email address
//                                   </label>
//                                   <input 
//                                   type="email" 
//                                   class="form-control" 
//                                   id="exampleFormControlInput1" 
//                                   name="email"
//                                   value={data.email}
//                                   onChange={InputEvent}
//                                   placeholder="name@example.com"
//                                   required
//                                   />
//                             </div>
//                             <div class="mb-3">
//                                   <label 
//                                   for="exampleFormControlTextarea1" 
//                                   class="form-label"
//                                   >Message
//                                   </label>
//                                   <textarea 
//                                   class="form-control" 
//                                   id="exampleFormControlTextarea1" 
//                                   rows="3"
//                                   name="msg"
//                                   value={data.msg}
//                                   onChange={InputEvent}
//                                   required
//                                   >
//                                   </textarea>
//                             </div>
//                             <div class="col-12">
//                                     <button 
//                                     class="btn btn-outline-primary" 
//                                     type="submit">
//                                     Submit form
//                                     </button>
//                             </div> 
//                           </form> 
//                       </div> 
//                   </div> 
//               </div> 
//             </>
//         );
//     };      
                    
        
        
//         export default Contact;
