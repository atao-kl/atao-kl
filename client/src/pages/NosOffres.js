
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useEffect, useState, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { ShoppingCartRounded, StarBorder } from '@mui/icons-material';
import axios from 'axios';


  /** Private
  * @NosOffres Fonction qui permet d'afficher les packs proposer au client EasyAO
  * @param {table} detailsarticles - table contient les détails des articles "DEC ou les services proposer pas EasyAO"
  * @author DEVAO - Khadija Lamsiah
  **/

function Copyright(props) {

 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const NosOffres = () => {
  
  const [articles, setArticles] = useState([]);
  const [refresh, toggleRefresh] = useState(0);
  const refreshParent = () => {
      toggleRefresh(refresh + 1);
  };

 useEffect(() => {
      fetcharticles();
  }, [refresh]);

  async function fetcharticles() {
      const { data } = await axios.get('/api/detailsarticles');
      setArticles(data);
      console.log("data",data);
      
  }
  return (
    <Fragment  >
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters  component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h3"
          variant="h2"
          align="center"
          color="#F39200"
          fontSize= "30px"
          className="ident"
          gutterBottom
        >
          Choisissez l'offre correspondant à vos besions
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Profiter d'un service de grande qualité et d'un sourcing complet sur les marchés publics au meilleur prix!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="30%" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {articles.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.titre}
              xs={12}
              sm={tier.titre === 'Premium' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.titre}
                  /*subheader={tier.subheader}*/
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.titre === 'Pro' ? <StarBorder /> : null}
                  /*subheaderTypographyProps={{
                    align: 'center',
                  }}*/
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent style={{backgroundColor :"#eee"}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h6" variant="h6" color="text.primary">
                      ${tier.prixht}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mois
                    </Typography>
                  </Box>
                  <ul>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key='1'
                      >
                        {tier.designation}
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key='2'
                      >
                        <h5 style={{color: '#F39200'}}>{tier.prixht} &euro;</h5>
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key='2'
                      >
                        soit {tier.prixht/tier.quantite_article} &euro; le DCE
                      </Typography>
                   
                  </ul>
                </CardContent>
                <CardActions style={{backgroundColor :"#eee"}}>
                  <Button fullWidth style={{backgroundColor: '#F39200' }} variant={'contained'} startIcon ={<ShoppingCartRounded fontSize="small" />}>
                    Ajouter au panier
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default NosOffres;