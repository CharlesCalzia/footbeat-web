import Alert from "@mui/material/Alert";
import React from "react";
import PropTypes from "prop-types";

export default function StatusInfo(props) {
    const status = props.status;
    return (
        <>
            {status === 1 ? (
                <Alert severity="success" sx={{ mt: 3 }}>
                    {props.success_message}
                </Alert>
            ) : null}
            {status === 2 ? (
                <Alert severity="error" sx={{ mt: 3 }}>
                    {props.error_message}
                </Alert>
            ) : null}
        </>
    );
}

StatusInfo.propTypes = {
    status: PropTypes.number.isRequired,
    success_message: PropTypes.string,
    error_message: PropTypes.string,
};