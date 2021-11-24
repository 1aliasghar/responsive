 import React, { Component, useState } from "react";
    import Joi from "joi-browser";
 
    
    
    class Contact extends Component {
        state = {
            account: {username: "", password: ""},
            error: {}
        };
    
        schema = {
            username: Joi.string().required(),
            password: Joi.string().required()
        };
        validate = () => {
            const result = Joi.validate(this.state.account, this.schema, {
                abortEarly: false
            });
            if (!result.error) return null;
            
            const errors = {};
            for (let item of result.error.details)
            errors[item.path[0]] = item.message;
            return errors;
        };
        
        handleSubmit = (e) => {
            e.preventDefault();
            
            const errors = this.validate();
            this.setState({error:errors || {} });
            if (errors) return;
        }
    }
    
    export default Contact;