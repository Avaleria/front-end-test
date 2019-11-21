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

const TweetsConfig = ({ accounts, positionHandler }) => {
    const classes = useStyles();
    const [first, setFirst] = React.useState({ name: 'versaagency', amount: 30 });
    const [second, setSecond] = React.useState({ name: 'rainagency', amount: 30 });
    const [third, setThird] = React.useState({ name: 'alexadevs', amount: 30 });


    const [labelWidth, setLabelWidth] = React.useState(0);
    const inputLabel = React.useRef(null);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleAmountChange = index => event => {
        const nextValue = event.target.value
        if (index === 0) {
            setFirst({ ...first, amount: nextValue });
        }
        if (index === 1) {
            setSecond({ ...second, amount: nextValue });
        }
        if (index === 2) {
            setThird({ ...third, amount: nextValue });
        }
    }

    const handleChange = index => event => {
        const nextValue = event.target.value
        if (index === 0) {
            if (first.name !== nextValue) {
                if (second.name === nextValue) {
                    setSecond({ ...second, name: first.name });
                } else {
                    setThird({ ...third, name: first.name });
                }
                setFirst({ ...first, name: event.target.value });
            }
        }
        if (index === 1) {
            if (second.name !== nextValue) {
                if (first.name === nextValue) {
                    setFirst({ ...first, name: second.name });
                } else {
                    setThird({ ...third, name: second.name });
                }
                setSecond({ ...second, name: event.target.value });
            }
        }
        if (index === 2) {
            if (third.name !== nextValue) {
                if (first.name === nextValue) {
                    setFirst({ ...first, name: third.name });
                } else {
                    setSecond({ ...second, name: third.name });
                }
                setThird({ ...third, name: event.target.value });
            }
        }
        positionHandler(index, nextValue);
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
                                value={first.name}
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
                                value={second.name}
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
                                value={third.name}
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
                            value={first.amount}
                            onChange={handleAmountChange(0)}
                        />
                        <TextField
                            id="second-number"
                            className={classes.textField}
                            label="2nd Tweets #"
                            margin="normal"
                            variant="outlined"
                            value={second.amount}
                            onChange={handleAmountChange(1)}
                        />
                        <TextField
                            id="third-number"
                            className={classes.textField}
                            label="3rd Tweets #"
                            margin="normal"
                            variant="outlined"
                            value={third.amount}
                            onChange={handleAmountChange(2)}
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