import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: '-40px',
	},
	emptyButton: {
		minWidth: '150px',
		[theme.breakpoints.down('xs')]: {
			marginBottom: '5px',
		},
		[theme.breakpoints.up('xs')]: {
			marginRight: '20px',
		},
	},
	checkoutButton: {
		minWidth: '150px',
	},
	link: {
		textDecoration: 'none',
	},
	cardDetails: {
		display: 'flex',
		marginTop: '10%',
		marginBottom: '100px',
		width: '100%',
		justifyContent: 'space-between',
	},
}));
