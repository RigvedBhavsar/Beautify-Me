import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	media: {
		height: 260,
		marginTop: '15px',
	},
	cardContent: {
		display: 'flex',
		marginTop: '10px',
		justifyContent: 'space-between',
	},
	cartActions: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
}));
