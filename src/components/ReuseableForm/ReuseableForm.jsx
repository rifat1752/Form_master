

const ReuseableForm = ({formTitle,buttonText='Submit',handleSubmit}) => {
   
    const handleLocalSubmit =e=>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
               <form onSubmit={handleLocalSubmit}>
             <input type="text" name="name" />
             <br />
             <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value={buttonText} />
            </form>
        </div>
    );
};

export default ReuseableForm;