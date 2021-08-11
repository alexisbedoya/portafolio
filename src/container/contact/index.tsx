
import { Grid, Typography, Button} from "@material-ui/core";
import { Container } from "./styled";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';

import { useState } from "react";

 
const Contact = () => {
  const { t } = useTranslation();
  
    const [name, setName] = useState("");
    const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('event is', );};
  return (
    <Container>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Typography variant="h2" align="center">
            {t("contact.title")}
          </Typography>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="name" label={t("contact.name")} fullWidth required onChange={hadleChange}/>
            <br />
            <br />
            <TextField id="email" label={t("contact.email")} fullWidth required onChange={hadleChange}/>
            <br />
            <br />
            <TextField id="message" label={t("contact.message")}  fullWidth required multiline rows={4} onChange={hadleChange}/>
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon/>}>{t("contact.send")} </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

