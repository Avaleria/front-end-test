import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tweet from './Tweet';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'center',
        padding: theme.spacing(2, 2),
    },

    list: {
        minWidth: 450,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 700,
    },
    listItem: {
        justifyContent: 'center'
    },
    subHeader: {
        padding: theme.spacing(2, 2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    padding: {
        padding: theme.spacing(0, 2),
    },
    account: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));


const TweetsDashboard = () => {
    const classes = useStyles();
    return (

        <Grid container spacing={3} className={classes.root}>
            {['@RainAgency', '@VersaAgency', '@alexadevs'].map(e => {
                return (
                    <Grid item xs className={classes.account}>
                        <Paper>
                            <List className={classes.list} subheader={<li />}>
                                <ListSubheader className={classes.subHeader}>
                                    <Badge color="primary" badgeContent={30} className={classes.margin}>
                                        <Typography variant="h6" className={classes.padding}>{e}</Typography>
                                    </Badge>
                                </ListSubheader>
                                {[...Array(30).keys()].map(item => (
                                    <ListItem key={`item-${item}`} className={classes.listItem}>
                                        <Tweet />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>

    );
};

export default TweetsDashboard;