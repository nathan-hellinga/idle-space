import classes from "./purchasable.module.css";
import {ButtonBase} from "@material-ui/core";
import PropTypes from "prop-types";
import FormatInt from "../../../Util/FormatInt";


export default function Purchasable({title, subtitle, altText, owned, price, onPurchase, disabled}) {


  return (
    <div className={classes.purchasable}>
      <ButtonBase style={{width: '100%'}} disabled={disabled} onClick={onPurchase}>
        <div className={[classes.innerWrapper, disabled && classes.disabled].join(" ")}>

          <div className={classes.content} style={{width: owned >= 0 ? '60%' : '100%'}}>
            <h1>{title}</h1>
            <h3 style={{marginTop: 'auto'}}>{FormatInt(price)}</h3>
          </div>
          <div className={classes.content2} style={{width: owned >= 0 ? '60%' : '100%'}}>
            <p style={{marginBottom: '4px'}}>{subtitle}</p>
            <p style={{opacity: 0.7, marginTop: 'auto'}}>{altText}</p>
          </div>
          {
            owned >= 0 &&
            <div style={{width: '40%', marginLeft: 'auto'}}>
              <span className={classes.owned}>{Math.min(999, owned)}</span>
            </div>
          }

        </div>
      </ButtonBase>
    </div>

  )
}

Purchasable.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  altText: PropTypes.string,
  owned: PropTypes.number,
  price: PropTypes.number,
  onPurchase: PropTypes.func,
  disabled: PropTypes.bool
};