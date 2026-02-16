const Ably = require('ably');
exports.handler = async () => {
    const client = new Ably.Rest(process.env.ABLY_ROOT_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'player' });
    return { statusCode: 200, body: JSON.stringify(tokenRequestData) };
};