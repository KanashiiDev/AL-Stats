class Card {
  constructor({
    brRadius,
    fg_opacity,
    displayName,
    bgColor,
    textColor,
    detailsColor,
    br,
    brColor,
    fgColor,
    height,
  }) {
    this.like_1_name = "Error";
    this.like_1_count = displayName;
    this.brRadius = brRadius;
    this.fgopacity = fg_opacity;
    this.oveflows = "";
    this.displayName = displayName;
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.detailsColor = detailsColor;
    this.br = br;
    this.brColor = brColor;
    this.fgColor = fgColor;
    this.height = height;
    this.nameheight = "height: 24px";
  }
  render() {
    return `
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="400" height="${this.height}" viewBox="0 0 400 ${this.height}" role="img">
  <style>
  svg#Layer_1{
    min-width:250px;
    text-align: -webkit-center;
    text-align-last: start;
    OVERFLOW: HIDDEN;
  }
  .cls-main{
    background:${this.bgColor};
    background-position:${this.bgpositionx}% ${this.bgpositiony}%;
    border-radius: ${this.brRadius};
    height: -webkit-fill-available;
    display: flex;
    overflow:hidden;
    align-items: center;
    flex-direction: column;
    align-items: stretch;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding; 
    background-clip: padding-box;
    border:${this.br};
    border-color:${this.brColor};
  }
  .namediv{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow:hidden;
    margin-left: -5px;
    margin-top: -5px
  }
  .namedetails {
    ${this.nameheight}
  }
  .cls-3 {
    font-size: 18px;
    color: ${this.textColor};
    font-family: SegoeUI-Bold, Segoe UI;
    font-weight: 700;
  }
  .cls-4 {
    color: ${this.detailsColor};
    font-size: 13px;
    font-family: SegoeUI, Segoe UI;
 
  }
  .test{
    display: flex;
    align-items: center;
    height:97px;
    justify-content: center;
    ${this.br ? 'border-radius:2px' : ""}
  }
  </style>
  <foreignObject height="100%" width="100%">
  <div id="base-shape" height="97px" width="100%" class="cls-main" xmlns="http://www.w3.org/1999/xhtml">
  <div id="bgcolor">
  <div class="test"><div class="namediv"><div class="namedetails">
  <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_1_name}</div></div>
  <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_1_count}</div></div></div>
  </div>
  </div>
  </foreignObject>
  </svg>`;
  }
}
module.exports = Card;