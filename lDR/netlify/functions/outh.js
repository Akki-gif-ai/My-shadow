const Ably = require('ably');

exports.handler = async (event, context) => {
    const key = process.env.ABLY_ROOT_KEY; // This pulls from your Netlify Settings
    const client = new Ably.Rest({ key });
    
    try {
        const tokenRequest = await new Promise((resolve, reject) => {
            client.auth.createTokenRequest({ clientId: 'shadows-user' }, (err, tr) => {
                if (err) reject(err); else resolve(tr);
            });
        });
        return { statusCode: 200, body: JSON.stringify(tokenRequest) };
    } catch (e) {
        return { statusCode: 500, body: "Error" };
    }
};
