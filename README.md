# AL-Stats
Dynamically generated Anilist user stat cards<br>
<h4><a href="https://alstats.vercel.app/">(Create your stat cards here)</a><br><br><h4>
<h1>Customization</h1>
You can customize your stat card with URL parameters. These are all the possible customization options:<br>
<code>bg</code> - <i>(Number)</i> Background Color (without #)<br>
<code>fg</code> - <i>(Number)</i> Foreground Color (without #)<br>
<code>txtColor</code> - <i>(Number)</i> Text Color (without #)<br>
<code>detailColor</code> - <i>(Number)</i> Detail Text Color (without #)<br>
<code>br</code> - <i>(Number (0-1))</i> Border<br>
<code>borderColor</code> - <i>(Number)</i> Border Color<br>
<code>borderRadius</code> - <i>(Number)</i> Smooth Curves<br><br>

<h2>Genres</h4>
<code>genres=1</code><br><br>
<b>Url Parameters</b><br>
<code>genres3</code> - <i>(Number (0-1))</i> Show Top 3 Genres<br><br>
<img src="https://alstats-hachiman-hikigaya.vercel.app/api?id=Hachiman&bg=0b1622&txtColor=9fadbd&detailColor=677b94&fg=192231&borderRadius=6&genres=1"><br>
<h2>Ratings</h4>
<code>score=1</code><br><br>
<b>Url Parameters</b><br>
<code>year</code> - <i>(Number (0-1))</i> Rating Year<br>
<code>thisyear</code> - <i>(Number (0-1))</i> Show only anime released in the selected year<br>
<code>currently</code> - <i>(Number (0-1))</i> Show only currently watched anime<br>
<code>ona</code> - <i>(Number (0-1))</i> Allow ONA<br>
<code>ova</code> - <i>(Number (0-1))</i> Allow OVA<br>
<br>
<img  src="https://alstats-hachiman-hikigaya.vercel.app/api?id=Hachiman&bg=0b1622&txtColor=9fadbd&detailColor=677b94&fg=192231&borderRadius=6&score=1&year=2023"><br>
<h2>Activity Likes</h4>
<code>likes=1</code><br><br>
<b>Url Parameters</b><br>
<code>likes3</code> - <i>(Number (0-1))</i> Show Top 3 Likes<br><br>
<i>Default Activity Page Limit : 10 (api/index.js - likeLimit)</i> <br><br>
<img src="https://alstats-hachiman-hikigaya.vercel.app/api?id=Hachiman&bg=0b1622&txtColor=9fadbd&detailColor=677b94&fg=192231&borderRadius=6&likes=1"><br>
