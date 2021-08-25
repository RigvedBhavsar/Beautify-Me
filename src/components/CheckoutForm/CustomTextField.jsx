import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
	const { control } = useFormContext();
	const isError = false;
	return (
		<Grid item xs={12} sm={6} style={{ marginTop: "-30px" }}>
			<Controller
				as={TextField}
				InputProps={{ disableUnderline: true }}
				name={name}
				control={control}
				label={label}
				fullWidth
				required={required}
				error={isError}
				defaultValue=""
			/>
		</Grid>
	);
}

export default FormInput;
