import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 2),
        margin: '8px'
    },
    group: {
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 120,
    },
    formControl: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 140,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightMedium,
    },
    config: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const TweetsConfig = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <div className={classes.config}>
                    <Icon color="primary">settings</Icon>&nbsp;&nbsp;
                    <Typography className={classes.heading}>Tweets configuration (edit layout)</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={3}>
                    <Grid item xs className={classes.group}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">1st Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value={10}>@VersaAgency</MenuItem>
                                <MenuItem value={20}>@RainAgency</MenuItem>
                                <MenuItem value={30}>@alexadevs</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">2nd Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value={10}>@VersaAgency</MenuItem>
                                <MenuItem value={20}>@RainAgency</MenuItem>
                                <MenuItem value={30}>@alexadevs</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">3rd Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value={10}>@VersaAgency</MenuItem>
                                <MenuItem value={20}>@RainAgency</MenuItem>
                                <MenuItem value={30}>@alexadevs</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs className={classes.group}>
                        <TextField
                            id="first-number"
                            className={classes.textField}
                            label="1st Tweets #"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="second-number"
                            className={classes.textField}
                            label="2nd Tweets #"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="third-number"
                            className={classes.textField}
                            label="3rd Tweets #"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}



export default TweetsConfig;