const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors'); // Thêm dòng này
app.use(cors()); // Thêm dòng này để bật CORS cho tất cả các route

const allowedOrigins = [
  'https://fifa-transfer-calculator-pro.lovable.app',
  'http://localhost:8080',
  'http://172.168.12.102:8080'
];
app.use(cors({
  origin: function(origin, callback){
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/api/hof/get", (req, res) => {
    // This endpoint retrieves the Hall of Fame data
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);
    var query = req.body;
    var config = {
        method: "GET",
        url: "https://ranking.fconline.garena.vn/api/hof/get",
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});

app.get("/api/game/get", (req, res) => {
    // This endpoint retrieves the game data
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);
    var query = req.body;
    var config = {
        method: "GET",
        url: "https://ranking.fconline.garena.vn/api/game/get",
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});

app.post("/api/user/search", (req, res) => {
    // This endpoint searches for a user
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);

    let data = JSON.stringify({
        "mode": req.body.mode,
        "month": req.body.month,
        "text": req.body.text,
    });

    var config = {
        method: "POST",
        maxBodyLength: Infinity,
        headers: { 
            'Content-Type': 'application/json'
        },
        url: "https://ranking.fconline.garena.vn/api/user/search",
        data: data
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});

app.get("/api2/fcodb", (req, res) => {
    // This endpoint retrieves the FC Online 4 database
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);

    var config = {
        method: "GET",
        maxBodyLength: Infinity,
        headers: { 
            'accept': 'application/json, text/plain, */*', 
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8', 
            'cookie': '_ga=GA1.2.1838188061.1714266606; sqslot={%22f%22:%224222%22%2C%22p%22:{%22cp10%22:%22aorbvndm%22%2C%22cp11%22:%22zwwaayll%22}%2C%22g%22:{%22cp10%22:%227%22%2C%22cp11%22:%226%22}}; __gads=ID=9b868b012f9cecbc:T=1713983535:RT=1719161211:S=ALNI_MbKx35VsSh-bsv4NsCgNsg8JGUoMw; __gpi=UID=00000df96488dff5:T=1713983535:RT=1719161211:S=ALNI_MZYdSyiT44UVtMuK2cJEnfa-KoQaw; __eoi=ID=cc208836d92f4c02:T=1713983535:RT=1719161211:S=AA-AfjZz-OR3qY8Aa2AIC7eJrT5S; FCNEC=%5B%5B%22AKsRol8Nv7faCMemkYnUNKJkmk8GeuDEh3lZ1dRWi31ceAheLVK9C7UA1t-YMA3wsOfh0zh7B80rzFpgkin8Vh1Svb_Cf1EDsPmKyaiLiNLYFGU7CPbV82LwRdgTlPiUfYkA4bM1GUjt-rwaka1_GDPVrbWlqUk4hg%3D%3D%22%5D%5D', 
            'dnt': '1', 
            'priority': 'u=1, i', 
            'referer': 'https://vn.fifaaddict.com/', 
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"', 
            'sec-ch-ua-mobile': '?0', 
            'sec-ch-ua-platform': '"Windows"', 
            'sec-fetch-dest': 'empty', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-site': 'same-origin', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 
            'x-requested-with': 'XMLHttpRequest', 
            'sec-browsing-topics': '();p=P0000000000000000000000000000000', 
            'sec-fetch-user': '?1', 
            'upgrade-insecure-requests': '1', 
            'content-type': 'application/json', 
            'origin': 'https://vn.fifaaddict.com'
        },
        url: "https://vn.fifaaddict.com/api2?q=fo4db&locale=vn"
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "successful",
                payload: response.data.db
            });
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});


// Viết API để lấy dữ liệu cầu thủ theo tên Ví dụ: GET /api2/playername?q=Maradona
app.get("/api2/playername", async (req, res) => {
    // This endpoint retrieves player data by name
    const playerName = req.query.q;
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Query: ${playerName}`);

    if (!playerName) {
        return res.status(400).send({ status: "fail", message: "Missing query parameter 'q'" });
    }

    var config = {
        method: "GET",
        maxBodyLength: Infinity,
        headers: { 
            'accept': 'application/json, text/plain, */*', 
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8', 
            'cookie': '_ga=GA1.2.1838188061.1714266606; sqslot={%22f%22:%224222%22%2C%22p%22:{%22cp10%22:%22aorbvndm%22%2C%22cp11%22:%22zwwaayll%22}%2C%22g%22:{%22cp10%22:%227%22%2C%22cp11%22:%226%22}}; __gads=ID=9b868b012f9cecbc:T=1713983535:RT=1719161211:S=ALNI_MbKx35VsSh-bsv4NsCgNsg8JGUoMw; __gpi=UID=00000df96488dff5:T=1713983535:RT=1719161211:S=ALNI_MZYdSyiT44UVtMuK2cJEnfa-KoQaw; __eoi=ID=cc208836d92f4c02:T=1713983535:RT=1719161211:S=AA-AfjZz-OR3qY8Aa2AIC7eJrT5S; FCNEC=%5B%5B%22AKsRol8Nv7faCMemkYnUNKJkmk8GeuDEh3lZ1dRWi31ceAheLVK9C7UA1t-YMA3wsOfh0zh7B80rzFpgkin8Vh1Svb_Cf1EDsPmKyaiLiNLYFGU7CPbV82LwRdgTlPiUfYkA4bM1GUjt-rwaka1_GDPVrbWlqUk4hg%3D%3D%22%5D%5D', 
            'dnt': '1', 
            'priority': 'u=1, i', 
            'referer': 'https://vn.fifaaddict.com/', 
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"', 
            'sec-ch-ua-mobile': '?0', 
            'sec-ch-ua-platform': '"Windows"', 
            'sec-fetch-dest': 'empty', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-site': 'same-origin', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 
            'x-requested-with': 'XMLHttpRequest', 
            'sec-browsing-topics': '();p=P0000000000000000000000000000000', 
            'sec-fetch-user': '?1', 
            'upgrade-insecure-requests': '1', 
            'content-type': 'application/json', 
            'origin': 'https://vn.fifaaddict.com'
        },
        url: `https://vn.fifaaddict.com/api2?q=fo4db&playername=${playerName}&locale=vn`
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "successful",
                payload: response.data.db
            });
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});

// API để lấy dữ liệu cầu thủ theo tên sử dụng fo4s.com
app.get("/api2/search", async (req, res) => {
    console.log("==========================================================================");
    const playerName = req.query.q;
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Query: ${playerName}`);

    if (!playerName) {
        return res.status(400).send({ status: "fail", message: "Missing query parameter 'q'" });
    }

    // const url = `https://fo4s.com/ajax?action=search_player&input=${encodeURIComponent(JSON.stringify({ q: playerName }))}`;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://fo4s.com/ajax?action=search_player&input=%7B%22pos%22%3A%5B%5D%2C%22class%22%3A%5B%5D%2C%22league%22%3A%22%22%2C%22club%22%3A%22%22%2C%22nation%22%3A%22%22%2C%22team%22%3A%22%22%2C%22trait%22%3A%5B%22%22%2C%22%22%2C%22%22%5D%2C%22ig_trait%22%3A%5B%5D%2C%22attr%22%3A%5B%22%22%2C%22%22%2C%22%22%5D%2C%22attr_value%22%3A%5B%7B%7D%2C%7B%7D%2C%7B%7D%5D%2C%22lfoot%22%3A%22%22%2C%22rfoot%22%3A%22%22%2C%22month%22%3A%22%22%2C%22day%22%3A%22%22%2C%22build%22%3A%5B%5D%2C%22skill%22%3A%22%22%2C%22fame%22%3A%22%22%2C%22sort%22%3A%22ovr-desc%22%2C%22col1%22%3A%22sprintspeed%22%2C%22col2%22%3A%22stamina%22%2C%22col3%22%3A%22strength%22%2C%22q%22%3A%22${encodeURIComponent(playerName)}%22%7D`,
        headers: { 
                'accept': 'application/json, text/plain, */*', 
                'accept-language': 'en-US,en;q=0.9,vi;q=0.8', 
                'dnt': '1', 
                'priority': 'u=1, i', 
                'referer': `https://fo4s.com/?sort=ovr-desc&col1=sprintspeed&col2=stamina&col3=strength&q=${encodeURIComponent(playerName)}`, 
                'sec-ch-ua': '"Chromium";v="136", "Microsoft Edge";v="136", "Not.A/Brand";v="99"', 
                'sec-ch-ua-mobile': '?0', 
                'sec-ch-ua-platform': '"Windows"', 
                'sec-fetch-dest': 'empty', 
                'sec-fetch-mode': 'cors', 
                'sec-fetch-site': 'same-origin', 
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 
                'x-requested-with': 'XMLHttpRequest', 
                'x-xsrf-token': 'eyJpdiI6IlpXMGZpelVuUDYyZm02c1wvaGpOQVVRPT0iLCJ2YWx1ZSI6Im00RW44RmJiK2QwamZtV3VLNHlcL2xVUU9YWXd2S0FoUFI4Uk5oYkxrU200U2hCczFJam04TkFcLzVzRndHNXEzNSIsIm1hYyI6IjVkZTczNTk0ZmJkYjQ2MzZkNzZmMjc5NGM1MWI3YzFhZDdkM2NmODJjMGJmYmNkNjZmZWQ5YTk0ZjY4MTgxZGQifQ==', 
                'Cookie': '_gid=GA1.2.171347783.1750691001; cf_clearance=zzaJ_v71h8Xh3YXxASlRIFHP4O5UN798SugjyNM.aos-1750693589-1.2.1.1-rjnAXFpMDPTQ3xoq9wrmCsqkUueH0kp3PA6L98zq5C4XySBFTiUkkaI9a40t.HqEGP2dmamTGGRc2Bb3TLZ5AlRyiOvVx_6IbQKiaJyr7sL19.Z74DB_TlLvXXKG1W5mjKHMz1FJiMxSKlU6BfZhi6v0f_OoYYXk9eveNsJmY8aZfJkK1sRCL_SOOkMAh8Ae3lHcFw3Z3OF6ZC9QTOrKokwHv494mLGQ3METz.aZoQjxXGT.R0BKItYBaYRWXgA42_RJxGIQRDxODvzbscbFeLn8ZoiLUa9iahn6.WkKCyDjtopZwzifYPqXKmkJ5BP5Y1fxzMihV87YjR59u1uwo2uxc9a.IBhxQuixa5JHh60; _gat_gtag_UA_188129913_2=1; _ga=GA1.1.1940381296.1750475509; _ga_58C26BMH3G=GS2.1.s1750693589$o4$g1$t1750694010$j47$l0$h0; XSRF-TOKEN=eyJpdiI6IjJTbEZ1S2E4R0pyZVlaT3FqTGlQblE9PSIsInZhbHVlIjoiZXE4bzVOWCtoWTVwWEJMRHRRSjZVdUQ5Z0RobzQrZ2FOS1V1TWlENFMrUURQNHhxOWN4Y0U4VndJemxYNVltMyIsIm1hYyI6Ijc2ODBkYWFmMjE0YjJmNzJmMzliZmU3ZGEyMGRiYzJkMDg4YTA4MzE1YzNlZjI3MjIxMmJiN2UxNzRkYjRkMjAifQ%3D%3D; fo4s_session=eyJpdiI6Im9KOTRaS3FCeVF0em02eTR6WXhFcVE9PSIsInZhbHVlIjoibGN4WU9UeWVCVFJ0a0d6MlErTHpUNUorNWNXSDBHNEcxYU1xdjNkMmNwUHI2ZkxSUTJWSHpzQ1IzNk9IbmVrRiIsIm1hYyI6IjM4NmFlNzI4OGZlZjM3ZGNhOTk3OTE2M2MyMjU1ZmU0YjUyYzg0YzFlNmQ0YjY4NGZlNWFmODNkNzRhNzAzMmMifQ%3D%3D; XSRF-TOKEN=eyJpdiI6ImVLd3VBa2R0aVpiZjBWS1VHakpIMGc9PSIsInZhbHVlIjoiZ0NwVlh0a2wwRmpya3hlNDdtQ1wvdERQSGFVQzNCTUg0aFhDV01WUHlXUDFFUEFvRnVLT2RDQk9taDFLUUEzUW4iLCJtYWMiOiJkMTJlYWQ4NTI5MzQ4NDUxMTM4MTQxZTY3ZTNkZmE5Mjg1NTNlNDM3Yzc4MWJhNWYyNWJhNGRhMTQ5YjcxYjNlIn0%3D; fo4s_session=eyJpdiI6ImsxaEwrSUJ5dzUrSnQxU2tNS1wvUlBBPT0iLCJ2YWx1ZSI6InVvSFJvQTFrSmJ2K3ltSDNNS2dMbWNEUkNcL3JON0I5YmMwS2F1Q3BmRjI1aTRHT0tFODliRG5kWUpOUVZFVmxhIiwibWFjIjoiZjQ2ZmVhODU0OGQwOTUxZGU1ODAwMzE0MmI2ODUyN2MyY2QxZjhiY2QwNGI5N2M3NGQyNGExZTFkOWUyMDVjNSJ9'
            }
        };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "successful",
                payload: response.data
            });
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});



app.post("/api2/:id", (req, res) => {
    // This endpoint retrieves player data by ID
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);

    let fo4pid = req.params.id
    console.log("api2/:id", fo4pid)
    var config = {
        method: "GET",
        maxBodyLength: Infinity,
        headers: { 
            'accept': 'application/json, text/plain, */*', 
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8', 
            'cookie': '_ga=GA1.2.1838188061.1714266606; sqslot={%22f%22:%224222%22%2C%22p%22:{%22cp10%22:%22aorbvndm%22%2C%22cp11%22:%22zwwaayll%22}%2C%22g%22:{%22cp10%22:%227%22%2C%22cp11%22:%226%22}}; __gads=ID=9b868b012f9cecbc:T=1713983535:RT=1719161211:S=ALNI_MbKx35VsSh-bsv4NsCgNsg8JGUoMw; __gpi=UID=00000df96488dff5:T=1713983535:RT=1719161211:S=ALNI_MZYdSyiT44UVtMuK2cJEnfa-KoQaw; __eoi=ID=cc208836d92f4c02:T=1713983535:RT=1719161211:S=AA-AfjZz-OR3qY8Aa2AIC7eJrT5S; FCNEC=%5B%5B%22AKsRol8Nv7faCMemkYnUNKJkmk8GeuDEh3lZ1dRWi31ceAheLVK9C7UA1t-YMA3wsOfh0zh7B80rzFpgkin8Vh1Svb_Cf1EDsPmKyaiLiNLYFGU7CPbV82LwRdgTlPiUfYkA4bM1GUjt-rwaka1_GDPVrbWlqUk4hg%3D%3D%22%5D%5D', 
            'dnt': '1', 
            'priority': 'u=1, i', 
            'referer': 'https://vn.fifaaddict.com/', 
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"', 
            'sec-ch-ua-mobile': '?0', 
            'sec-ch-ua-platform': '"Windows"', 
            'sec-fetch-dest': 'empty', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-site': 'same-origin', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 
            'x-requested-with': 'XMLHttpRequest', 
            'sec-browsing-topics': '();p=P0000000000000000000000000000000', 
            'sec-fetch-user': '?1', 
            'upgrade-insecure-requests': '1', 
            'content-type': 'application/json', 
            'origin': 'https://vn.fifaaddict.com'
        },
        url: `https://vn.fifaaddict.com/api2?fo4pid=pid${fo4pid}&locale=vn`
    };

    axios(config)
        .then(function (response) {
            // Show IP, datetime and user agent, response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "successful",
                payload: response.data
            });
        })
        .catch(function (error) {
            // Show IP, datetime and user agent, error
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error: ${error.message}`);
            res.status(400).send({ status: "fail" });
        });
});

app.get("/api/get_avatar", async (req, res) => {
    // This endpoint checks if an image URL is valid
    // Show IP, datetime and user agent and request body
    console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Request Body: ${JSON.stringify(req.body)}`);
    const imageUrl = req.query.url;
    try {
        const response = await axios.head(imageUrl);
        if (response.status >= 200 && response.status < 400) {
            // Show IP, datetime and user agent and response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "success",
                payload: imageUrl
            });
        } else {
            // Show IP, datetime and user agent and response data
            console.log(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Response Data: ${JSON.stringify(response.data)}`);
            res.status(200).send({
                status: "fail",
                payload: imageUrl
            });
        }
    } catch (error) {
        if (error.response) {
            // Show IP, datetime and user agent and error response data
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error Response Data: ${JSON.stringify(error.response.data)}`);
            res.status(200).send({
                status: "fail",
                payload: imageUrl
            });
        } else if (error.request) {
            // Show IP, datetime and user agent and error request data
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error Request Data: ${JSON.stringify(error.request)}`);
            res.status(200).send({
                status:"fail",
                payload: imageUrl
            });
        } else {
            // Show IP, datetime and user agent and error message
            console.error(`IP: ${req.ip}, DateTime: ${new Date().toISOString()}, User-Agent: ${req.headers['user-agent']}, Error Message: ${error.message}`);
            res.status(200).send({
                status: "fail",
                payload: imageUrl
            });
        }
    }
    
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;