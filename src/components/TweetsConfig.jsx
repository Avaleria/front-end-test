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
import accounts from '../accounts';
import styles from '../styles/TweetsConfigStyle';

const useStyles = makeStyles(styles);

const TweetsConfig = ({ positionHandler, amountHandler }) => {
    const classes = useStyles();
    const [first, setFirst] = React.useState(accounts[0]);
    const [second, setSecond] = React.useState(accounts[1]);
    const [third, setThird] = React.useState(accounts[2]);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const inputLabel = React.useRef(null);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleAmountChange = index => event => {
        const nextValue = event.target.value
        let account = {};
        if (index === 0) {
            setFirst({ ...first, amount: nextValue });
            account = first;
        }
        if (index === 1) {
            setSecond({ ...second, amount: nextValue });
            account = second;
        }
        if (index === 2) {
            setThird({ ...third, amount: nextValue });
            account = third;
        }
        amountHandler(account.id, account.name, index, nextValue);
    }

    const handleChange = index => event => {
        const nextValue = event.target.value
        if (index === 0) {
            if (first.id !== nextValue) {
                if (second.id === nextValue) {
                    setSecond({ ...second, id: first.id });
                } else {
                    setThird({ ...third, id: first.id });
                }
                setFirst({ ...first, id: event.target.value });
            }
        }
        if (index === 1) {
            if (second.id !== nextValue) {
                if (first.id === nextValue) {
                    setFirst({ ...first, id: second.id });
                } else {
                    setThird({ ...third, id: second.id });
                }
                setSecond({ ...second, id: event.target.value });
            }
        }
        if (index === 2) {
            if (third.id !== nextValue) {
                if (first.id === nextValue) {
                    setFirst({ ...first, id: third.id });
                } else {
                    setSecond({ ...second, id: third.id });
                }
                setThird({ ...third, id: event.target.value });
            }
        }
        positionHandler(nextValue, index);
    };

    return (
        // TODO: make all this generic (reduce the markup)
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
                                value={first.id}
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
                                value={second.id}
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
                                value={third.id}
                                onChange={handleChange(2)}
                                labelWidth={labelWidth}>
                                {accounts.map(acc => <MenuItem value={acc.id} key={acc.id}>{acc.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs className={classes.group}>
                        <TextField
                            id="first-number"
                            type="number"
                            className={classes.textField}
                            label="1st Tweets #"
                            margin="normal"
                            variant="outlined"
                            value={first.amount}
                            onChange={handleAmountChange(0)}
                        />
                        <TextField
                            id="second-number"
                            type="number"
                            className={classes.textField}
                            label="2nd Tweets #"
                            margin="normal"
                            variant="outlined"
                            value={second.amount}
                            onChange={handleAmountChange(1)}
                        />
                        <TextField
                            id="third-number"
                            type="number"
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
    positionHandler: PropTypes.func,
    amountHandler: PropTypes.func
};


export default TweetsConfig;