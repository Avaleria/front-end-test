export default theme => ({
    root: {
        justifyContent: 'center',
        padding: theme.spacing(2, 2),
    },

    list: {
        minWidth: 320,
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
        maxWidth: 500
    }
})