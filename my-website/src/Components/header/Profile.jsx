import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    marginLeft: 20,
    cursor: "pointer",
  },
});

const Profile = ({ account, setAccountuser }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
   
  const LogOut = () => {
      setAccountuser(false);
  }
  const classes = useStyles();

  return (
    <>
      <Link to="/">
        <Typography onClick={handleClick} style={{ marginTop: "4px" }}>
          {account}
        </Typography>
      </Link>
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={ () => {handleClose(); LogOut();}}>
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
