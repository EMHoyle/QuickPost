import React from 'react';
import Typography from '@material-ui/core/Typography';
import HomeStyles from './HomeStyles';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#" to='/'>
          www.quickpost.cl
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const HomeContent = () => {
  const classes = HomeStyles();

  return (
    <>
        <Typography  className={classes.typo} paragraph>
        QuickPost es una aplicación basada en React + Material UI + Hooks con el fin de entregar a usted la posibilidad de hacer un seguimiento completo de los post realizados y manejar la trazabilidad de los mismos de manera eficiente y cómoda. Su DataBase se alimenta directamente de la API creada para usted; así el mantenimiento se hace directamente a la API desde nuestra base de operaciones según el requerimiento que tenga a la hora de establecer sus prioridades.
        </Typography>
        <Typography  className={classes.typo} paragraph>
        La interfaz minimalista permite que le sea de fácil acceso las opciones que usted requiera para su control. Además cuenta con la capacidad de ver los post por tags necesarios para tener una vista rápida de las mismas.
        </Typography>
        <Typography  className={classes.typo} paragraph>
        QuickPost cuenta también con un sistema de login para permitir el acceso sólo a aquellos que usted requiera darle.
        </Typography>
        <Typography  className={classes.typo2} paragraph>
            <span style={{ fontWeight: 'bold', fontSize: '2rem', marginTop: '2rem'}} >Ventajas</span>
                    <li>Empleo de nuevas tecnologías</li>
                    <li>Diseño minimalista</li>
                    <li>Seguro y Confiable</li>
                    <li>Fácil de usar</li>
                    <li>Adaptable</li>
        </Typography>
        <div className={classes.logo}>
            <BlurOnIcon style={{ fontSize: '10rem', color: '#00bcd4', marginLeft: '60px'}} />
            <p style={{ fontSize: '1.8rem', color: '#00bcd4'}}>QuickPost by Rokket Lab</p>
        </div>
        <Box className={classes.footer}>
          <Copyright />
        </Box>
    </>
    );
}

export default HomeContent;