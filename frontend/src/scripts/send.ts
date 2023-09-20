import axios from 'axios';

  var names;
  var email;
  var telephone;
  var message;
  

  
export const handleEmail = async () => {
    let login = {
        names,
        email,
        telephone,
        message
    }
        const headers = {
            'Access-Control-Allow-Origin' : '*'
        };
        let res = await axios.post('http://localhost:8000/email/send',login);
        let user = await res.data;
      }

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    if (e.target.id === "nameInput"){
        names = (e.target.value);
    } else if (e.target.id === "telInput") {
        telephone = (e.target.value);
    } else if (e.target.id === "emailInput") {
        email = (e.target.value);
    } else if (e.target.id === "commentInput") {
        message = (e.target.value);
    }
}