import * as React from "react";
import {
    WithStyles,
    withStyles,
    Button,
    IconButton,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CardActions,
    Collapse,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as classnames from 'classnames';
import tournamentCardStyle from "../../assets/jss/material-tournament-react/tournamentCardStyle";
import { Link } from 'react-router-dom'

interface TournamentCardProps {
    title: string,
    subheader: string,
    image: string,
    description: string,
    participant: number,
    detail: string,
    classes: any,
    onEntry: any,
    id: number,
    isEntry: boolean,
}

interface TournamentCardState {
    expanded: boolean,
}

type ClassNames = keyof typeof tournamentCardStyle;
class TournamentCard extends React.Component<TournamentCardProps & WithStyles<ClassNames>, TournamentCardState> {
    constructor(props: TournamentCardProps) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    public render() {
        const classes = this.props.classes;
        const linkTo = "/entry/" + this.props.id;
        return (
            <Card className={classes.card}>
                <CardHeader title={this.props.title} subheader={this.props.subheader} />
                <CardMedia
                    className={classes.media}
                    image={this.props.image}
                    title={this.props.title}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                    <Typography component="p" color="primary">
                        +{this.props.participant}チーム
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button variant="raised" color="primary" disabled={this.props.isEntry}>
                        <Link to={linkTo} className={classes.link}>
                            参加する
                        </Link>
                    </Button>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto">
                    <CardContent>
                        <Typography variant="body2">
                            詳細:
                        </Typography>
                        <Typography >
                            {this.props.detail}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card >
        );
    }

    private handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };
}

export default withStyles<{} & ClassNames>(tournamentCardStyle)<TournamentCardProps>(TournamentCard);