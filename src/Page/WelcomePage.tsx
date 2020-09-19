import React, { PropsWithChildren, ReactNode } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link, { LinkProps } from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Logo from "Component/Logo";
import List from "@material-ui/core/List";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Popover from "@material-ui/core/Popover";
import HelpIcon from "@material-ui/icons/Help";

function ToDoListItemTip({ content }: { content: ReactNode }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="tip" onClick={handleClick}>
        <HelpIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography>{content}</Typography>
      </Popover>
    </ListItemSecondaryAction>
  );
}

interface ToDoListItemProps
  extends PropsWithChildren<{
    checked: boolean;
    labelId: string;
    tip?: ReactNode;
  }> {}

function ToDoListItem({
  checked,
  children: text,
  labelId,
  tip,
}: ToDoListItemProps) {
  return (
    <ListItem button>
      <ListItemIcon style={{ minWidth: 32 }}>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId}>{text}</ListItemText>
      {tip && <ToDoListItemTip content={tip} />}
    </ListItem>
  );
}

const OutLink = (props: LinkProps) => (
  <Link target="_blank" rel="noopener noreferrer" {...props} />
);

const useStyles = makeStyles((theme) => ({
  list: {
    margin: theme.spacing(2, 0),
  },
}));

export default function WelcomePage() {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Logo />
      </Box>

      <Typography variant="h3" align="center">
        Welcome to your new project!
      </Typography>

      <List className={classes.list}>
        <ToDoListItem checked={true} labelId="cra">
          Project started from{" "}
          <OutLink href="https://create-react-app.dev">CRA</OutLink>
        </ToDoListItem>
        <ToDoListItem checked={true} labelId="code-style">
          <OutLink href="https://prettier.io/">Prettier</OutLink>,{" "}
          <OutLink href="https://github.com/typicode/husky">husky</OutLink> and{" "}
          <OutLink href="https://github.com/okonet/lint-staged">
            lint-staged
          </OutLink>{" "}
          watching for code formatting
        </ToDoListItem>
        <ToDoListItem checked={true} labelId="material-ui">
          Styles got from{" "}
          <OutLink href="https://material-ui.com">Material UI</OutLink>
        </ToDoListItem>
        <ToDoListItem
          checked={true}
          labelId="mst"
          tip={
            <Box padding={2}>
              <OutLink href="https://transform.tools/json-to-mobx-state-tree">
                You can use awesome tool for generate MST models
              </OutLink>
            </Box>
          }
        >
          <OutLink href="https://mobx-state-tree.js.org">
            Mobx State Tree
          </OutLink>{" "}
          used as application state holder
        </ToDoListItem>
        <ToDoListItem checked={false} labelId="router">
          Find out router
        </ToDoListItem>
      </List>

      <Typography variant="h4" align="center">
        Points to start
      </Typography>

      <Typography variant="body1">
        Edit <code>src/App.tsx</code> and save to reload.
      </Typography>

      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Container>
  );
}
