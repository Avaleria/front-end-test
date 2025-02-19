import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tweet from './Tweet';
import styles from '../styles/TweetsDashboardStyles';

const useStyles = makeStyles(styles);

const TweetsDashboard = ({ tweets }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            {tweets.map(account => {
                return (
                    <Grid item xs className={classes.account} key={account.name}>
                        <Paper>
                            <List className={classes.list} subheader={<li />}>
                                <ListSubheader className={classes.subHeader}>
                                    <Badge color="primary" badgeContent={account.tweets.length} className={classes.margin}>
                                        <Typography variant="h6" className={classes.padding}>{account.name}</Typography>
                                    </Badge>
                                </ListSubheader>
                                {account.tweets.map(item => (
                                    <ListItem key={`item-${item.id}`} className={classes.listItem}>
                                        <Tweet content={item} />
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

TweetsDashboard.propTypes = {
    tweets: PropTypes.array
};

export default TweetsDashboard;