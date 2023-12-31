require("dotenv").config();
export const revalidate = 0;
const Card = require("../src/Card");
const Card2 = require("../src/error");
const Card3 = require("../src/Card2");
const Card4 = require("../src/Card3");
const imageToBase64 = require("image-to-base64");
module.exports = async (req, res) => {
  let userid = 0;
  let username = "";
  let cardContent = "";
  let usercontent = false;
  let likes3list = false;
  let genres3list = false;
  let bgmode = 0;
  let bgpositionx = "100";
  let bgpositiony = "100";
  let fg_opacity = "0.8";
  let bgColor = "#0b1622";
  let fgColor = "#192231";
  let textColor = "#fff";
  let detailsColor = "#b3b5b8";
  let br = "0";
  let brRadius = "4px";
  let brColor = "#fff";
  let userarray = [];
  let followerarray = [];
  let likesArray;
  let likeLimit = 10;
  let genresarray = [];
  let scoreYear = false;
  let scoreArray = [];
  let genre1, genre2, genre3, genre4, genre5, genre6, OVA, ONA;
  res.setHeader("Content-Type", "image/svg+xml");
  const { id, bg, fg, fgopacity, txtColor, detailColor, border, borderColor, borderRadius, likes3, likes, genres, genres3, score, year, ova, ona } = req.query; {
    let error = false;
    let card;
    if (fgopacity) { fg_opacity = fgopacity; } else { fg_opacity = "0.8"; }
    if (bg) { bgColor = "#" + bg; } else { bgColor = "#0b1622"; }
    if (fg) { fgColor = "#" + fg; } else { fgColor = "#192231"; }
    if (txtColor) { textColor = "#" + txtColor; } else { textColor = "#fff"; }
    if (detailColor) { detailsColor = "#" + detailColor; } else { detailsColor = "#ededed"; }
    if (border) { br = "1px solid"; } else { br = "0"; }
    if (borderColor) { brColor = "#" + borderColor; } else { brColor = "#fff"; }
    if (borderRadius) { brRadius = borderRadius + "px"; } else { brRadius = "0px"; }
    if (likes3) { likes3list = 1; } else { likes3list = false }
    if (genres3) { genres3list = 1; } else { genres3list = false }
    if (year) { scoreYear = year; } else { scoreYear = new Date().getFullYear(); }
    if (ova) { OVA = 1 } else { OVA = 0 };
    if (ona) { ONA = 1 } else { ONA = 0 };
    if (likes3 || likes || genres || genres3 || score) {
      if (likes || likes3) {
        if (id) { username = id; await getid(id); c(); } else { username = ""; error = true }
        async function getid(id) {
          var query = `query ($userName: String){User(name: $userName) {id name}}`;
          var variables = { userName: id };
          let url = 'https://graphql.anilist.co', options = { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ query: query, variables: variables }) };
          fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
          async function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
          async function handleData(data) {
            userid = await data.data.User.id;
            await getFollowers();
          }
          function handleError(error) {
            console.error(error);
            if (error.errors.some(err => err.status === 404)) {
              card = new Card2({ displayName: "User not found.", brRadius, bgmode, bgpositionx, bgpositiony, fg_opacity, bgColor: "#000", textColor, detailsColor, br, brColor, fgColor, height: 97, });
              return res.send(card.render());
            }
          }
        }
        async function getFollowers() {
          var query = `query ($id: Int!, $page: Int) {Page (page: $page) {pageInfo{lastPage}
          followers(userId: $id, sort:USERNAME) {name avatar{medium} id}}}`;
          let querydata = "";
          let lastpage;
          var variables = { id: userid, page: 1 };
          let url = 'https://graphql.anilist.co', options = {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ query: query, variables: variables })
          };
          fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
          function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
          async function handleData(data) {
            data.data.Page.followers.forEach(follower => { followerarray.push(follower); })
            if (data.data.Page.pageInfo.lastPage > 1) { lastpage = data.data.Page.pageInfo.lastPage + 1; recall(); }
            else { await getActivities(); }
            async function recall() {
              for (let x = 1; x < lastpage; x++) {
                if (x == 1) {
                  querydata += "query {"
                }
                querydata += "Page" + x + ": Page(page: " + x + ") {followers(userId: " + userid + ", sort: USERNAME) {name avatar {medium}id}}"
                if (x + 1 == lastpage) {
                  querydata += "}";
                  recall2();
                }
              }
            }
            async function recall2() {
              let query = querydata;
              let url = 'https://graphql.anilist.co', options = {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query: query, variables: variables })
              };
              fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
              function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
              async function handleData(data) {
                for (let x = 1; x < lastpage; x++) {
                  let p = eval("data.data.Page" + x);
                  p.followers.forEach(follower => { followerarray.push(follower); });
                  if (x + 1 == lastpage) {
                    getActivities();
                  }
                }
              }
            }
          }
          function handleError(error) { console.error(error); }
        }
        async function getActivities() {
          var query = `query ($userId: Int, $page: Int)  {Page (page: $page  perPage:50) {pageInfo{lastPage}
           activities(sort: ID_DESC,userId: $userId){... on MessageActivity {likes{name}}... on TextActivity {likes{name}}... on ListActivity {likes{name}}}}}`;
          let querydata = "";

          var variables = { id: userid, page: 1 };
          let url = 'https://graphql.anilist.co', options = {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ query: query, variables: variables })
          };
          fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
          function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
          async function handleData(data) {
            if (data.data.Page.pageInfo.lastPage > 1) { recall(); }
            else {
              likeLimit = 1; recall();
            }
            async function recall() {
              for (let x = 1; x < likeLimit; x++) {
                if (x == 1) {
                  querydata += "query {"
                }
                querydata += "Page" + x + ": Page(page: " + x + " perPage:50) {activities(sort: ID_DESC,userId: " + userid + "){... on MessageActivity {likes{name}}... on TextActivity {likes{name}}... on ListActivity {likes{name}}}}";
                if (x + 1 == likeLimit) {
                  querydata += "}";
                  await recall2();
                }
              }
            }
            async function recall2() {
              let query = querydata;
              let url = 'https://graphql.anilist.co', options = {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query: query, variables: variables })
              };
              fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
              function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
              async function handleData(data) {
                let likearr = [];
                for (let x = 1; x < likeLimit; x++) {
                  eval("data.data.Page" + x).activities.forEach(like => {
                    likearr.push(like.likes);
                  })
                  if (x + 1 == likeLimit) {
                    var merged2 = [].concat.apply([], likearr);
                    merged2.forEach(l => {

                      for (let x = 0; x < followerarray.length; x++) {
                        if (followerarray[x].name == l.name) {
                          userarray.push({ name: followerarray[x].name, avatar: followerarray[x].avatar.medium });
                        }
                      }
                    })
                    let obj = {};
                    userarray.forEach((item) => {
                      if (!obj[item.name]) { obj[item.name] = item; obj[item.name].avatar = item.avatar; obj[item.name].count = 0; }
                      else { obj[item.name].avatar = item.avatar; obj[item.name].count += 1; }
                    })
                    var sort = Object.keys(obj).map(e => ({ name: e, ...obj[e] })).sort((a, b) => a.count - b.count)
                    likesArray = sort;
                    likesArray.reverse();
                    while (likesArray.length < 10) { likesArray.push({ name: "", count: 0, avatar: "data:image/jpeg;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" }) }
                    await handleData2();
                  }
                }
              }
            }
          }
          async function handleData2() {
            r();
            async function r() {
              if (!likesArray) {
                setTimeout(() => {
                  r();
                }, 80);
              }
              else {
                if (likesArray[0].count >= 1) {
                  likesArray[0].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[0].avatar);
                }
                if (likesArray[1].count >= 1) {
                  likesArray[1].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[1].avatar);
                }
                if (likesArray[2].count >= 1) {
                  likesArray[2].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[2].avatar);
                }
                if (likesArray[3].count >= 1) {
                  likesArray[3].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[3].avatar);
                }
                if (likesArray[4].count >= 1) {
                  likesArray[4].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[4].avatar);
                }
                if (likesArray[5].count >= 1) {
                  likesArray[5].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[5].avatar);
                }
                if (likesArray[6].count >= 1) {
                  likesArray[6].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[6].avatar);
                }
                if (likesArray[7].count >= 1) {
                  likesArray[7].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[7].avatar);
                }
                if (likesArray[8].count >= 1) {
                  likesArray[8].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[8].avatar);
                }
                if (likesArray[9].count >= 1) {
                  likesArray[9].avatar = "data:image/jpeg;base64," + await imageToBase64(likesArray[9].avatar);
                }
                for (let i = 0; i < likesArray.length; i++) {
                  if (likesArray[i].count >= 1) {
                    likesArray[i].count = "Likes: " + likesArray[i].count;
                  }
                  else {
                    likesArray[i].count = "";
                    likesArray[i].name = "";
                    likesArray[i].avatar = "data:image/jpeg;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                  }
                }
                await handleReturn();
              }
            }
          }
          async function handleReturn() {
            let user = await likesArray;
            if (user) {
              let displayName = "";
              cardContent = {
                likesArray,
                brRadius,
                bgmode,
                bgpositionx,
                bgpositiony,
                fg_opacity,
                username,
                displayName,
                bgColor,
                textColor,
                detailsColor,
                br,
                brColor,
                fgColor,
                likes3list,
                height: 550,
              }
            } usercontent = true; return cardContent;
          }
          function handleError(error) { console.error(error); }
        }
      }
      if (genres || genres3) {
        if (id) { username = id; await getGenres(id); c(); } else { username = ""; error = true }
        let genremediaarray = [];
        async function getGenres(id) {

          var query = `query 	 ($userName: String){User(name: $userName) {
            statistics{
            anime{
            genres (limit:6  sort: COUNT_DESC) {
            genre
            count
            meanScore
            minutesWatched
            mediaIds
           }}}}}`;
          var variables = { userName: id };
          let url = 'https://graphql.anilist.co', options = {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ query: query, variables: variables })
          };
          fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
          async function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
          async function handleData(data) {
            genresarray = await data.data.User.statistics.anime.genres;
            if (genresarray) {
              await handleData2();
            }
          } function handleError(error) {
            console.error(error);
          }
        }
        let count = 0;
        async function handleData2() {
          if (genresarray) {
            if (count === 0) { recall(); }
            async function recall() {
              let genre = await genresarray[count];
              var query = `query ($id1: Int,$id2: Int,$id3: Int,$id4: Int,$id5: Int,$id6: Int) {
              Page1: Page(page: 1) {
                media1: media(id: $id1, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
              Page2: Page(page: 1) {
                media2: media(id: $id2, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
              Page3: Page(page: 1) {
                media3: media(id: $id3, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
              Page4: Page(page: 1) {
                media4: media(id: $id4, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
              Page5: Page(page: 1) {
                media5: media(id: $id5, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
              Page6: Page(page: 1) {
                media6: media(id: $id6, type: ANIME) {
                  siteUrl
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
            }`;
              var variables = { id1: genre.mediaIds[0], id2: genre.mediaIds[1], id3: genre.mediaIds[2], id4: genre.mediaIds[3], id5: genre.mediaIds[4], id6: genre.mediaIds[5] };
              let url = 'https://graphql.anilist.co', options = {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query: query, variables: variables })
              };
              fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
              async function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
              async function handleData(data) {
                genremediaarray.push(data.data.Page1.media1);
                genremediaarray.push(data.data.Page2.media2);
                genremediaarray.push(data.data.Page3.media3);
                genremediaarray.push(data.data.Page4.media4);
                genremediaarray.push(data.data.Page5.media5);
                genremediaarray.push(data.data.Page6.media6);
                if (count === 0) {
                  genresarray[0].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[0].mediaIds.media.length; x++) {
                    genresarray[0].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[0].mediaIds.media[x][0].coverImage.medium);
                    genresarray[0].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[0].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre1 = await genresarray[0];
                };
                if (count === 1) {
                  genresarray[1].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[1].mediaIds.media.length; x++) {
                    genresarray[1].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[1].mediaIds.media[x][0].coverImage.medium);
                    genresarray[1].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[1].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre2 = await genresarray[1];
                }
                if (count === 2) {
                  genresarray[2].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[2].mediaIds.media.length; x++) {
                    genresarray[2].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[2].mediaIds.media[x][0].coverImage.medium);
                    genresarray[2].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[2].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre3 = await genresarray[2];
                }
                if (count === 3) {
                  genresarray[3].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[3].mediaIds.media.length; x++) {
                    genresarray[3].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[3].mediaIds.media[x][0].coverImage.medium);
                    genresarray[3].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[3].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre4 = await genresarray[3];
                }
                if (count === 4) {
                  genresarray[4].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[4].mediaIds.media.length; x++) {
                    genresarray[4].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[4].mediaIds.media[x][0].coverImage.medium);
                    genresarray[4].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[4].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre5 = await genresarray[4];
                }
                if (count === 5) {
                  genresarray[5].mediaIds = { media: genremediaarray };
                  for (let x = 0; x < genresarray[5].mediaIds.media.length; x++) {
                    genresarray[5].mediaIds.media[x][0].coverImage.medium = await imageToBase64(genresarray[5].mediaIds.media[x][0].coverImage.medium);
                    genresarray[5].mediaIds.media[x][0].coverImage.medium = "data:image/jpeg;base64," + genresarray[5].mediaIds.media[x][0].coverImage.medium;
                  }
                  genre6 = await genresarray[5];
                }
                if (count < 5) {
                  count = count + 1;
                  genremediaarray = [];
                  await recall();
                } else {
                  await handleReturn();
                }
              }
            }
          }
          function handleError(error) {
            console.error(error);
          }
          async function handleReturn() {
            let user = await genre1;
            if (user) {
              let displayName = "";
              cardContent = {
                genre1, genre2, genre3, genre4, genre5, genre6,
                genres3list,
                brRadius,
                bgmode,
                bgpositionx,
                bgpositiony,
                fg_opacity,
                username,
                displayName,
                bgColor,
                textColor,
                detailsColor,
                br,
                brColor,
                fgColor,
                height: 500,
              }
            } usercontent = true; return cardContent;
          }
        }
      }
      if (score) {
        if (id) { username = id; await getScore(id); c(); } else { username = ""; error = true }
        async function getScore() {
          let dateYear = scoreYear.toString();
          let dateYearStart = parseInt(dateYear + "0000");
          let dateYearEnd = parseInt(dateYear + "1231");
          let username = id;
          var query = `query ($id: String, $yearstart: FuzzyDateInt, $yearend: FuzzyDateInt) {
            MediaListCollection(userName:$id,type:ANIME,status:COMPLETED, sort:SCORE_DESC, completedAt_greater:$yearstart, completedAt_lesser:$yearend){lists{name entries{... mediaListEntry }}}}
            fragment mediaListEntry on MediaList{score media {siteUrl title {romaji} coverImage {medium}}}`;
          var variables = { id: username, yearstart: dateYearStart, yearend: dateYearEnd };
          let url = 'https://graphql.anilist.co', options = {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ query: query, variables: variables })
          };
          fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
          function handleResponse(response) { return response.json().then(function (json) { return response.ok ? json : Promise.reject(json); }); }
          async function handleData(data) {

            let dataarr = await data.data.MediaListCollection.lists;
            let dataarray = [];
            for (let x = 0; x < dataarr.length; x++) {
              if (OVA == 1 && ONA == 1) {
                if (dataarr[x].name === "Completed" || dataarr[x].name === "Completed TV" || dataarr[x].name === "Completed Movie" || dataarr[x].name === "Completed OVA" || dataarr[x].name === "Completed ONA") { dataarray.push(dataarr[x].entries) }
              }
              else if (OVA == 1) {
                if (dataarr[x].name === "Completed" || dataarr[x].name === "Completed TV" || dataarr[x].name === "Completed Movie" || dataarr[x].name === "Completed OVA") { dataarray.push(dataarr[x].entries) }
              }
              else if (ONA == 1) {
                if (dataarr[x].name === "Completed" || dataarr[x].name === "Completed TV" || dataarr[x].name === "Completed Movie" || dataarr[x].name === "Completed ONA") { dataarray.push(dataarr[x].entries) }
              }
              else {
                if (dataarr[x].name === "Completed" || dataarr[x].name === "Completed TV" || dataarr[x].name === "Completed Movie") { dataarray.push(dataarr[x].entries) }
              }
              var merged = [].concat.apply([], dataarray);
              var sort = Object.keys(merged).map(e => ({ _: e, ...merged[e] })).sort((a, b) => a.score - b.score);
              sort.reverse();
              scoreArray = sort;
            }
            r();
            async function r() {
              if (scoreArray.length <= 2) {
                setTimeout(() => {
                  r();
                }, 100);
              }
              else {
                scoreArray[0].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[0].media.coverImage.medium);
                scoreArray[1].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[1].media.coverImage.medium);
                scoreArray[2].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[2].media.coverImage.medium);
                scoreArray[3].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[3].media.coverImage.medium);
                scoreArray[4].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[4].media.coverImage.medium);
                scoreArray[5].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[5].media.coverImage.medium);
                scoreArray[6].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[6].media.coverImage.medium);
                scoreArray[7].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[7].media.coverImage.medium);
                scoreArray[8].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[8].media.coverImage.medium);
                scoreArray[9].media.coverImage.medium = "data:image/jpeg;base64," + await imageToBase64(scoreArray[9].media.coverImage.medium);
                await handleReturn();
              }
            }
          }
          function handleError(error) { console.error(error); }

          async function handleReturn() {
            let score = await scoreArray;
            if (score) {
              let displayName = "";
              cardContent = {
                scoreYear,
                scoreArray,
                brRadius,
                bgmode,
                bgpositionx,
                bgpositiony,
                fg_opacity,
                username,
                displayName,
                bgColor,
                textColor,
                detailsColor,
                br,
                brColor,
                fgColor,
                height: 450,
              }
            } usercontent = true; return cardContent;
          }
        }
      }
      async function c() {
        if (usercontent) {
          if (likes || likes3) {
            card = new Card(cardContent);
            return res.send(card.render());
          }
          else if (genres || genres3) {
            card = new Card3(cardContent);
            return res.send(card.render());
          }
          else if (score) {
            card = new Card4(cardContent);
            return res.send(card.render());
          }
        }
        else {
          setTimeout(c, 50); return
        }
      };
      if (error) {
        card = new Card2({ displayName: "User not found.", brRadius, bgmode, bgpositionx, bgpositiony, fg_opacity, bgColor: "#000", textColor, detailsColor, br, brColor, fgColor, height: 97, });
        return res.send(card.render());
      }
    } else {
      card = new Card2({ displayName: "Invalid Url Parameter. (example url parameter: &amp;likes=1)", brRadius, bgmode, bgpositionx, bgpositiony, fg_opacity, bgColor: "#000", textColor, detailsColor, br, brColor, fgColor, height: 97, });
      return res.send(card.render());
    }
  }
};