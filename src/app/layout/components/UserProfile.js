/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Typography } from '@material-ui/core'
import { useSelector } from "react-redux";
import { Grid } from '@material-ui/core';


function UserProfile() {
	const authReducer = useSelector(({ auth }) => auth)
	return (
		<div>
			<Grid
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
			>
				<Typography variant="h6" style={{ color: "#847b7b" }}>User: </Typography>
				<Typography variant="h6" style={{ marginLeft: 5, color: "#000000" }}>{authReducer.user}</Typography>
			</Grid>
		</div>
	)
}

export default UserProfile
