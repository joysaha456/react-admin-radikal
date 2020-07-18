import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import WeeklyIssuesWidget from './components/weekly-issues-widget/weekly-issues-widget.component';
import ProjectStatesWidget from './components/project-states-widget/project-states.component';
import BacklogWidget from './components/backlog-widget/backlog-widget.component';
import IssuesStatusWidget from './components/issues-status-widget/issues-status-widget.component';
import UserTasksWidget from './components/user-tasks-widget/user-tasks-widget.component';

import styles from './project.style';

const Lock = (props) => {
  const {
    classes
  } = props;

  return (

      
    <Grid item xs={12}>


  

    <Grid key={6} item xs={12} sm={12} md={6} className={classes.portalWidget}>
        <Typography variant="subheading" className={classes.portalWidgetHeading}>
          This Month
        </Typography>
        <Paper className={classes.portalWidgetContent}>
          <UserTasksWidget />
        </Paper>
      </Grid>
      
    


  </Grid>
  );
};

Lock.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default  withStyles(styles, { withTheme: true }) (Lock);
