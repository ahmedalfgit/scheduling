import * as React from "react";
import Grid from '@material-ui/core/Grid';



function Logo(props) {
  return (
   <div className="pt-md-5 pb-md-5">
     <Grid container spacing={0} className={"pt-md-5 pd-md-5 justify-center form-container"}>
        <Grid item md={10} sm={12} xs={12}>
        <form name="contact" method="POST" data-netlify="true">
            <div>
                <label>Your Name: <input type="text" name="name" /></label>   
            </div>
            <div>
                <label>Your Email: <input type="email" name="email" /></label>
            </div>
            <div>
                <label>Message: <textarea name="message"></textarea></label>
            </div>
            <div data-netlify-recaptcha="true">
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
        </Grid>
     </Grid>
   </div>
  );
}

export default Logo;