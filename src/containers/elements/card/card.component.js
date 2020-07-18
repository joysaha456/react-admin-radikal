import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';



import scss from './theming.module.scss';


const Cards = (props) => {
  const {
    theme
  } = props;

  return (
    <div>
      <section className={scss['portal-pages__header']}>
        <svg
          className={scss['portal-pages__header-icon']}
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <g>
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M7 1h48v17H7z" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M2 9h5" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M55 9h6v15H32v17" />
            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M28 42h8v21h-8z" />
          </g>
        </svg>
      </section>
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10} >
          <Paper className={scss['portal-pages__content-inner']}>
            <Typography variant="headline" gutterBottom>Settings</Typography>

            <Typography component="p" gutterBottom>
              Admin panel settings 
            </Typography>

   

            <br />


            <Card className={scss.card}>
              <CardContent>
                <Grid container>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Site Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Tag"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Addess"
                      fullWidth
                      
                    />
                  </Grid>
         
                </Grid>
              </CardContent>
 
            </Card>
          
       <br></br>

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Typography variant="title" gutterBottom>Side Navigation Colors</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Toolbars Background</Typography>
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Toolbars Text Color</Typography>
                  </Grid>
                  <Grid item>
                   
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Dark Sidenav</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={theme.sidenavTheme.palette.type === 'dark'}
                      onChange={props.changeSidenavPaletteType}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <br />
                <Typography variant="title" gutterBottom>Primary Color</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Primary Background Color</Typography>
                  </Grid>
                  <Grid item>
       
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Primary Text Color</Typography>
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="title" gutterBottom>Main Content Colors</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Content Toolbars Background</Typography>
                  </Grid>
                  <Grid item>
                   
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Content Toolbars Text Color</Typography>
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Dark Content</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={theme.contentTheme.palette.type === 'dark'}
                      onChange={props.changeContentPaletteType}
                    />
                  </Grid>
                </Grid>
                <Divider />
                <br />
                <Typography variant="title" gutterBottom>Secondary Color</Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Secondary Background Color</Typography>
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={scss['portal-pages__color_option']}
                >
                  <Grid item>
                    <Typography component="p">Secondary Text Color</Typography>
                  </Grid>
                  <Grid item>
                   
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={scss['portal-pages__color_examples']}
              >
                <Grid item>
                  <Button variant="raised" color="primary">
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="raised" color="secondary">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};
export default Cards; 