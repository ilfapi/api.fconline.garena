const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors'); // Thêm dòng này
app.use(cors()); // Thêm dòng này để bật CORS cho tất cả các route

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