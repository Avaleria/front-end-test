export default theme => ({
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
})