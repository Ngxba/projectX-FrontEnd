import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cartItemStyles } from '../CartItemStyle';



export default function CartItem() {
    const classes = cartItemStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => { console.log("10") }}>
                <div className={classes.imgContainer}>
                    <img
                        src="https://images.stockx.com/images/Sony-Playstation-5-Blu-Ray-Edition-Console-White.jpg?fit=clip&bg=FFFFFF&w=300&h=214&auto=compress&trim=color&q=90&dpr=2&updated_at=1605716639&fm=jpg&ixlib=react-9.0.3&h=90&w=140"
                        alt=""
                        width="auto"
                        height="120"
                    />
                </div>
                <CardContent>
                    <Typography className={classes.itemName} gutterBottom variant="subtitle1" component="h2">
                        Sony PS5 PlayStation 5 (US Plug) Blu-ray Edition Console 3005718 White
                    </Typography>
                    <Typography className={classes.itemPrice} variant="body2" component="p">
                        $719
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
