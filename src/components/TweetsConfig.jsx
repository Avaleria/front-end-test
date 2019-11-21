import React from 'react';
import PropTypes from 'prop-types';
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

const TweetsConfig = ({ accounts }) => {
    const classes = useStyles();
    const [first, setFirst] = React.useState('versaagency');
    const [second, setSecond] = React.useState('rainagency');
    const [third, setThird] = React.useState('alexadevs');


    const [labelWidth, setLabelWidth] = React.useState(0);
    const inputLabel = React.useRef(null);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = index => event => {
        const nextValue = event.target.value
        if (index === 0) {
            if (first !== nextValue) {
                if (second === nextValue) {
                    setSecond(first);
                } else {
                    setThird(first);
                }
                setFirst(event.target.value);
            }
        }
        if (index === 1) {
            if (second !== nextValue) {
                if (first === nextValue) {
                    setFirst(second);
                } else {
                    setThird(second);
                }
                setSecond(event.target.value);
            }
        }
        if (index === 2) {
            if (third !== nextValue) {
                if (first === nextValue) {
                    setFirst(third);
                } else {
                    setSecond(third);
                }
                setThird(event.target.value);
            }
        }
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
                                value={first}
                                onChange={handleChange(0)}
                                labelWidth={labelWidth}>
                                {accounts.map(acc => <MenuItem value={acc.id} key={acc.id}>{acc.name}</MenuItem>)}

                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">2nd Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={second}
                                onChange={handleChange(1)}
                                labelWidth={labelWidth}>
                                {accounts.map(acc => <MenuItem value={acc.id} key={acc.id}>{acc.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">3rd Account</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={third}
                                onChange={handleChange(2)}
                                labelWidth={labelWidth}>
                                {accounts.map(acc => <MenuItem value={acc.id} key={acc.id}>{acc.name}</MenuItem>)}
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

TweetsConfig.propTypes = {
    accounts: PropTypes.array
};


export default TweetsConfig;