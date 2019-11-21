import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Moment from 'react-moment';
import Chip from '@material-ui/core/Chip';
import uuidv1 from 'uuid/v1';

Moment.globalFormat = 'YYYY/MM/DD - hh:mm a';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    creationDate: {
        marginLeft: 0
    },
    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: 4,
        },
    },
});


const Tweet = ({ content }) => {
    const classes = useStyles();

    const goTo = tweet => () => {
        if (tweet.entities.urls.length) {
            window.open(tweet.entities.urls[0].url, '_blank');
        }
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={goTo(content)}>
                <CardMedia
                    className={classes.media}
                    image="placeholder.jpg"
                    title="Twitter"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{content.user.screen_name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{content.text}</Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <Box textAlign="left" fontWeight="fontWeightBold" m={1} className={classes.creationDate}>
                            <Moment>{new Date(content.created_at)}</Moment>
                        </Box>
                    </Typography>
                    {content.entities.user_mentions.length ?
                        <div className={classes.chipContainer}>
                            {content.entities.user_mentions.map(um => <Chip label={um.name} key={um.id + uuidv1()} variant="outlined" />)}
                        </div>
                        : <div></div>
                    }
                </CardContent>
            </CardActionArea>
            <CardActions>
                {content.entities.urls.length ?
                    <Button size="small" color="primary" onClick={goTo(content)}>See more</Button>
                    : <div></div>
                }
            </CardActions>
        </Card>
    );
};

Tweet.propTypes = {
    content: PropTypes.object
};

export default Tweet;