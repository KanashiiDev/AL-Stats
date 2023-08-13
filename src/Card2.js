class Card {
  constructor({
    genre1,genre2,genre3,genre4,genre5,genre6,
    genres3list,
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
    this.genres3list = genres3list;
    this.height = height;
    this.header = "Favorite Genres";
    this.width = 500;
    this.genre_1 = genre1;
    this.genre_2 = genre2;
    this.genre_3 = genre3;
    this.genre_4 = genre4;
    this.genre_5 = genre5;
    this.genre_6 = genre6;
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
    this.nameheight = "height: 24px";
    if(genres3list){
      this.height = 260;
      this.width = 460;
    }
  }
  render() {
    return `
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" role="img">
  <style>
  svg#Layer_1{
    min-width:250px;
    text-align: -webkit-center;
    text-align-last: start;
    OVERFLOW: HIDDEN;
  }
  .cls-main{
    background:${this.bgColor};
    border-radius: ${this.brRadius};
    height: -webkit-fill-available;
    display: flex;
    overflow:hidden;
    align-items: center;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding; 
    background-clip: padding-box;
    padding: 20px;
    border:${this.br};
    border-color:${this.brColor};
    
    ${this.genres3list !== 1 ? 'min-width: 460px;min-height: 460px;' : ""}
    ${this.genres3list === 1 ? 'min-width: 440px;min-height: 240px;padding: 10px;' : ""}
  }
  .namediv{
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin-top: -5px
  }
  #bgcolor{
    display: grid;
    grid-template-columns: repeat(auto-fill,140px);
    justify-content: space-evenly;
    ${this.genres3list === 1 ? 'margin-top: 230px' : ""}
  }
  .namedetails {
    ${this.nameheight};
    align-self: center;
  }
  .details{
    display: flex;
    justify-content: space-around;
  }
  .cls-3 {
    font-size: 16px;
    color: ${this.textColor};
    font-family: SegoeUI-Bold, Segoe UI;
    font-weight: 700;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cls-4 {
    color: ${this.detailsColor};
    font-family: SegoeUI, Segoe UI;
    font-size: 8px;
    text-wrap:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:5px;
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .imgDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
  }
  .test{
    flex-wrap: nowrap;
    display: flex;
  width:fit-content;
  background-color:${this.fgColor};
    flex-direction: column;
    height: 179px;
    padding: 10px;
    border-radius: 4px;
    margin-top:15px
  }
  img#pfp-image {
    border-radius: 4px;
    background-color:${this.fgColor}
  }
  #header{
    text-align-last: center;
    font-size: 22px;
    ${this.genres3list !== 1 ? 'top: -3px;position: relative;' : ""}
    ${this.genres3list === 1 ? 'position: absolute;top: 10px;left: 0;right: 0;top: 5px;' : ""}
  }
  a{
    text-decoration:none
  }
  b.value{
    font-size:12px;
    color: ${this.textColor};
  }
  </style>
  <foreignObject height="100%" width="100%">
  <div id="base-shape" height="500px" width="100%" class="cls-main" xmlns="http://www.w3.org/1999/xhtml">

  <div class="cls-3" id="header" xmlns="http://www.w3.org/1999/xhtml" >${this.header}</div>
  <div id="bgcolor">
  
  <div class="test">
  <div class="namediv"><div class="namedetails">
  <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_1.genre.toString()}</div></div>
  <div class="details" xmlns="http://www.w3.org/1999/xhtml">
  <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_1.count.toString()}</b></div>
  <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_1.meanScore.toString()}%</b></div></div></div>
  <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
  <a href="${this.genre_1.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[0][0].coverImage.medium}"/></a>
  <a href="${this.genre_1.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[1][0].coverImage.medium}"/></a>
  <a href="${this.genre_1.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[2][0].coverImage.medium}"/></a>
  <a href="${this.genre_1.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[3][0].coverImage.medium}"/></a>
  <a href="${this.genre_1.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[4][0].coverImage.medium}"/></a>
  <a href="${this.genre_1.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.mediaIds.media[5][0].coverImage.medium}"/></a>
  </div>
  </div>
  <div class="test">
    <div class="namediv"><div class="namedetails">
    <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_2.genre.toString()}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_2.count.toString()}</b></div>
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_2.meanScore.toString()}%</b></div></div></div>
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_2.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[0][0].coverImage.medium}"/></a>
    <a href="${this.genre_2.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[1][0].coverImage.medium}"/></a>
    <a href="${this.genre_2.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[2][0].coverImage.medium}"/></a>
    <a href="${this.genre_2.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[3][0].coverImage.medium}"/></a>
    <a href="${this.genre_2.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[4][0].coverImage.medium}"/></a>
    <a href="${this.genre_2.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.mediaIds.media[5][0].coverImage.medium}"/></a>
    </div>
    </div>
    <div class="test">
    <div class="namediv"><div class="namedetails">
    <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_3.genre.toString()}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_3.count.toString()}</b></div>
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_3.meanScore.toString()}%</b></div></div></div>
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_3.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[0][0].coverImage.medium}"/></a>
    <a href="${this.genre_3.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[1][0].coverImage.medium}"/></a>
    <a href="${this.genre_3.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[2][0].coverImage.medium}"/></a>
    <a href="${this.genre_3.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[3][0].coverImage.medium}"/></a>
    <a href="${this.genre_3.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[4][0].coverImage.medium}"/></a>
    <a href="${this.genre_3.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.mediaIds.media[5][0].coverImage.medium}"/></a>
    </div>
    </div>
    <div class="test">
    <div class="namediv"><div class="namedetails">
    <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_4.genre.toString()}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_4.count.toString()}</b></div>
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_4.meanScore.toString()}%</b></div></div></div>
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_4.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[0][0].coverImage.medium}"/></a>
    <a href="${this.genre_4.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[1][0].coverImage.medium}"/></a>
    <a href="${this.genre_4.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[2][0].coverImage.medium}"/></a>
    <a href="${this.genre_4.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[3][0].coverImage.medium}"/></a>
    <a href="${this.genre_4.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[4][0].coverImage.medium}"/></a>
    <a href="${this.genre_4.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.mediaIds.media[5][0].coverImage.medium}"/></a>
    </div>
    </div>
    <div class="test">
    <div class="namediv"><div class="namedetails">
    <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_5.genre.toString()}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_5.count.toString()}</b></div>
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_5.meanScore.toString()}%</b></div></div></div>
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_5.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[0][0].coverImage.medium}"/></a>
    <a href="${this.genre_5.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[1][0].coverImage.medium}"/></a>
    <a href="${this.genre_5.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[2][0].coverImage.medium}"/></a>
    <a href="${this.genre_5.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[3][0].coverImage.medium}"/></a>
    <a href="${this.genre_5.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[4][0].coverImage.medium}"/></a>
    <a href="${this.genre_5.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.mediaIds.media[5][0].coverImage.medium}"/></a>
    </div>
    </div>
    <div class="test">
    <div class="namediv"><div class="namedetails">
    <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_6.genre.toString()}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Count<b class='value'>${this.genre_6.count.toString()}</b></div>
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_6.meanScore.toString()}%</b></div></div></div>
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_6.mediaIds.media[0][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[0][0].coverImage.medium}"/></a>
    <a href="${this.genre_6.mediaIds.media[1][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[1][0].coverImage.medium}"/></a>
    <a href="${this.genre_6.mediaIds.media[2][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[2][0].coverImage.medium}"/></a>
    <a href="${this.genre_6.mediaIds.media[3][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[3][0].coverImage.medium}"/></a>
    <a href="${this.genre_6.mediaIds.media[4][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[4][0].coverImage.medium}"/></a>
    <a href="${this.genre_6.mediaIds.media[5][0].siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.mediaIds.media[5][0].coverImage.medium}"/></a>
    </div>
    </div>
  </div>
  </div>
  </foreignObject>
  </svg>`;
  }
}
module.exports = Card;