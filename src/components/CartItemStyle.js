import { makeStyles } from '@material-ui/core/styles';

export const cartItemStyles = makeStyles({
    root: {
        maxWidth: "225px",
    },
    media: {
        height: "90px",
    },
    imgContainer: {
        margin: "16px",
        display: "flex",
        justifyContent: "center"
    },
    itemName: {
        height: "60px",
        overflow: "hidden",
    },
    itemPrice: {
        fontWeight: "700",
        fontSize: "22px",
        lineHeight: "1.3"
    }
});