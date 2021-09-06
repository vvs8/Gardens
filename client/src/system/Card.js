import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Accordion} from 'react-bootstrap'
import { addItem, updateItem, removeItem } from './cartHelpers';
import { makeStyles } from '@material-ui/core/styles';
import {Card as Card1} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Card = ({
  product,
  setRun = f => f,
  run = undefined
}) => {
 
    
    const RemoveButton = () => {
        return (
            <button
            onClick={() => {
                removeItem(product._id);
                setRun(!run); // run useEffect in parent Cart
            }}
            className="btn btn-outline-danger mt-2 mb-2"
            >
            Remove
            </button>
        );
    }

    function displayOptions(object) {
        const R = []
        for (let [key, value] of Object.entries(object)) {
            if(value != '')
                R.push(<p>{key}: <i>{value}</i></p>)
        }
        return R.slice(1)
    }

const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card1 className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {product.name}
        </Typography>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Details: </Accordion.Header>
                <Accordion.Body>
                    {displayOptions(product)}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>  
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <RemoveButton/>
      </CardActions>
    </Card1>
  );


    
};

export default Card;