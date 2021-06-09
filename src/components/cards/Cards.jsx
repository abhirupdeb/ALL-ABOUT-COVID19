import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core'; 
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading...';
    }

    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom align="center" style= {{ fontSize:'2em', color: 'rgba(149, 0, 255, 0.8)' }}> Infected </Typography>
                        <Typography variant ="h5" align = "center" style= {{ fontFamily: 'monospace' }}> 
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = "," />                    
                        </Typography>
                        <Typography color = "textSecondary" align = "center"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant ="body2" align="center"> Number of Active Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom align="center" style= {{ fontSize:'2em', color: 'rgba(0, 149, 255, 0.8)' }}> Recovered </Typography>
                        <Typography variant ="h5" align = "center">
                            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary" align="center"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant ="body2" align="center"> Number of Recovered Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom align="center" style= {{ fontSize:'2em', color: 'rgba(200, 0, 34, 0.8)' }}> Deaths </Typography>
                        <Typography variant ="h5" align="center">
                            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = "," />
                        </Typography>
                        <Typography color = "textSecondary" align="center"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant ="body2" align="center"> Number of Death Cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    )
}

export default Info;