const { Intents } = require('discord.js');

const {
  DIRECT_MESSAGES,
  DIRECT_MESSAGE_REACTIONS,
  DIRECT_MESSAGE_TYPING,
  GUILD_MESSAGES,
  GUILD_MESSAGE_TYPING,
  GUILDS,
  GUILD_MESSAGE_REACTIONS,
} = Intents.FLAGS;

const botIntents = [
  DIRECT_MESSAGES,
  DIRECT_MESSAGE_REACTIONS,
  DIRECT_MESSAGE_TYPING,
  GUILD_MESSAGES,
  GUILD_MESSAGE_TYPING,
  GUILDS,
  GUILD_MESSAGE_REACTIONS,
];

const commands = {
  getName: 'get-name',
  tellJoke: 'tell-a-joke',
  sad: 'sad',
  lastMsgs: 'last-messages',
};

const prefix = '!';

module.exports = { botIntents, prefix, commands };
